/** Authoring root and compiled artifact root (single private curriculum). */

export const COURSES_DIR_RELATIVE = '.courses';
export const ARTIFACTS_DIR_RELATIVE = 'artifacts';

/** Prefer explicit `COURSES_DIR`, else `.courses`. */
export function resolveCoursesDirRelative(env: { COURSES_DIR?: string } = {}): string {
  if (env.COURSES_DIR && env.COURSES_DIR.trim() !== '') return env.COURSES_DIR.trim();
  return COURSES_DIR_RELATIVE;
}
