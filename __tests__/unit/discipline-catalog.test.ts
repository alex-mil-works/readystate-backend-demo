import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { discoverDisciplines, loadDiscipline } from '../../tools/content-compiler/load-discipline';
import { paths } from '../../tools/content-compiler/paths';
import { manifestsToCatalogRoles } from '../../tools/content-compiler/write-discipline-catalog';

const hasCourses = existsSync(path.join(paths.coursesDir, 'frontend/discipline.yaml'));

describe.skipIf(!hasCourses)('discipline catalog sync', () => {
  it('builds catalog roles from .courses/*/discipline.yaml', async () => {
    const dirs = await discoverDisciplines(paths.coursesDir);
    const manifests = await Promise.all(dirs.map((dir) => loadDiscipline(dir)));
    const roles = manifestsToCatalogRoles(manifests);

    expect(roles.map((role) => role.id).toSorted()).toEqual(['frontend', 'qa-automation']);
    const frontend = roles.find((role) => role.id === 'frontend');
    expect(frontend?.stacks.some((stack) => stack.id === 'react' && stack.available)).toBe(true);
  });
});
