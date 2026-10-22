import { Router } from 'express';

import { readCourseBundle, readDisciplines } from '../content/artifacts.js';

/** Course JSON changes only on deploy/compile — safe to cache briefly in the browser. */
const CONTENT_CACHE_CONTROL = 'public, max-age=60, stale-while-revalidate=3600';

export const contentRouter = Router();

contentRouter.get('/disciplines', async (_req, res, next) => {
  try {
    const roles = await readDisciplines();
    res.setHeader('Cache-Control', CONTENT_CACHE_CONTROL);
    res.json({ roles });
  } catch (error) {
    next(error);
  }
});

contentRouter.get('/courses/:roleId/:stackId', async (req, res, next) => {
  try {
    const roleId = req.params.roleId;
    const stackId = req.params.stackId;
    if (!roleId || !stackId) {
      res.status(400).json({ error: 'invalid_params' });
      return;
    }

    const course = await readCourseBundle(roleId, stackId);
    if (!course) {
      res.status(404).json({ error: 'course_not_found', roleId, stackId });
      return;
    }

    res.setHeader('Cache-Control', CONTENT_CACHE_CONTROL);
    res.json({ course });
  } catch (error) {
    next(error);
  }
});
