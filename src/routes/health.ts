import { Router } from 'express';

import { getArtifactsStatus } from '../content/artifacts.js';
import { env } from '../env.js';

export const healthRouter = Router();

healthRouter.get('/health', async (_req, res, next) => {
  try {
    const artifacts = await getArtifactsStatus();
    res.status(artifacts.ready ? 200 : 503).json({
      ok: artifacts.ready,
      service: 'readystate-backend-demo',
      ts: new Date().toISOString(),
      artifacts,
      corsOrigins: env.corsOrigins,
    });
  } catch (error) {
    next(error);
  }
});
