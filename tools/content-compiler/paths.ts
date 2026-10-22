import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  ARTIFACTS_DIR_RELATIVE,
  resolveCoursesDirRelative,
} from '../../src/content/content-source.js';

const compilerDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(compilerDir, '../..');
const coursesDirRelative = resolveCoursesDirRelative({
  COURSES_DIR: process.env.COURSES_DIR,
});
const artifactsDirRelative = ARTIFACTS_DIR_RELATIVE;

/** Repo-relative and artifact output paths for the content compiler. */
export const paths = {
  repoRoot,
  coursesDirRelative,
  coursesDir: path.join(repoRoot, coursesDirRelative),
  artifactsDirRelative,
  /** Compiled JSON + disciplines.* live under artifacts/ */
  generatedDir: path.join(repoRoot, artifactsDirRelative),
  /** Legacy flat course bundle: `artifacts/<courseId>/course.json`. */
  generatedCourseJson: (courseId: string) =>
    path.join(repoRoot, artifactsDirRelative, courseId, 'course.json'),
  /** Discipline stack bundle: `artifacts/<roleId>/<stackId>/course.json`. */
  generatedDisciplineCourseJson: (roleId: string, stackId: string) =>
    path.join(repoRoot, artifactsDirRelative, roleId, stackId, 'course.json'),
} as const;

/** Repo-relative POSIX path for stable logs and JSON. */
export function toRepoRelative(absolutePath: string): string {
  return path.relative(paths.repoRoot, absolutePath).split(path.sep).join('/');
}
