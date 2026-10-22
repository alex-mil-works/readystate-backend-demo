import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { env } from '../env.js';
import type { CourseContentBundle } from './types.js';

export type DisciplineRoleDto = {
  id: string;
  label: string;
  stacks: Array<{ id: string; label: string; available: boolean }>;
};

export type ArtifactsStatus = {
  ready: boolean;
  disciplines: boolean;
  courseCount: number;
  hint?: string;
};

const disciplinesCache: { value?: DisciplineRoleDto[] } = {};
const courseCache = new Map<string, CourseContentBundle>();

async function exists(target: string): Promise<boolean> {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

function courseCacheKey(roleId: string, stackId: string): string {
  return `${roleId}/${stackId}`;
}

/** Whether compiled artifacts exist (disciplines + at least one course.json). */
export async function getArtifactsStatus(): Promise<ArtifactsStatus> {
  const disciplinesPath = path.join(env.artifactsDir, 'disciplines.json');
  const hasDisciplines = await exists(disciplinesPath);
  if (!hasDisciplines) {
    return {
      ready: false,
      disciplines: false,
      courseCount: 0,
      hint: 'Run yarn content:compile (or yarn start, which compiles first).',
    };
  }

  let courseCount = 0;
  try {
    const roles = await readdir(env.artifactsDir, { withFileTypes: true });
    for (const role of roles) {
      if (!role.isDirectory()) continue;
      const stacks = await readdir(path.join(env.artifactsDir, role.name), {
        withFileTypes: true,
      });
      for (const stack of stacks) {
        if (!stack.isDirectory()) continue;
        const coursePath = path.join(
          env.artifactsDir,
          role.name,
          stack.name,
          'course.json',
        );
        if (await exists(coursePath)) courseCount += 1;
      }
    }
  } catch {
    courseCount = 0;
  }

  return {
    ready: courseCount > 0,
    disciplines: true,
    courseCount,
    hint:
      courseCount > 0
        ? undefined
        : 'disciplines.json present but no course.json — run yarn content:compile.',
  };
}

/** Throw if artifacts are missing — call once at process boot. */
export async function assertArtifactsReady(): Promise<void> {
  const status = await getArtifactsStatus();
  if (status.ready) return;
  throw new Error(
    `Content artifacts not ready (${status.hint ?? 'unknown'}). artifactsDir=${env.artifactsDir}`,
  );
}

/** Load disciplines catalog written by content:compile. */
export async function readDisciplines(): Promise<DisciplineRoleDto[]> {
  if (disciplinesCache.value) return disciplinesCache.value;

  const filePath = path.join(env.artifactsDir, 'disciplines.json');
  if (!(await exists(filePath))) {
    throw new Error(`Missing ${filePath}. Run yarn content:compile.`);
  }
  const raw = await readFile(filePath, 'utf8');
  const value = JSON.parse(raw) as DisciplineRoleDto[];
  disciplinesCache.value = value;
  return value;
}

/** Load one compiled course bundle. */
export async function readCourseBundle(
  roleId: string,
  stackId: string,
): Promise<CourseContentBundle | undefined> {
  const key = courseCacheKey(roleId, stackId);
  const cached = courseCache.get(key);
  if (cached) return cached;

  const filePath = path.join(env.artifactsDir, roleId, stackId, 'course.json');
  if (!(await exists(filePath))) return undefined;
  const raw = await readFile(filePath, 'utf8');
  const value = JSON.parse(raw) as CourseContentBundle;
  courseCache.set(key, value);
  return value;
}
