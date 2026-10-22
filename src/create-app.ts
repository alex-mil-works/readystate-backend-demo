import compression from 'compression';
import cors from 'cors';
import express, { type Express } from 'express';

import { env } from './env.js';
import { contentRouter } from './routes/content.js';
import { healthRouter } from './routes/health.js';

/** Wire middleware + routes onto an Express app (entrypoint owns `express()` for Vercel). */
export function configureApp(app: Express): Express {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(
    cors({
      origin: env.corsOrigins,
    }),
  );
  app.use(express.json({ limit: '2mb' }));

  app.use('/v1', healthRouter);
  app.use('/v1', contentRouter);

  app.use((_req, res) => {
    res.status(404).json({ error: 'not_found' });
  });

  app.use(
    (
      error: unknown,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      const message = error instanceof Error ? error.message : 'internal_error';
      console.error(error);
      res.status(500).json({ error: 'internal_error', message });
    },
  );

  return app;
}

/** Local helpers / tests that want a ready app in one call. */
export function createApp(): Express {
  return configureApp(express());
}
