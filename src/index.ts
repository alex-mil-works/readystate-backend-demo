import 'dotenv/config';

// Vercel Express detection requires a direct import in the entrypoint file.
import express from 'express';

import { assertArtifactsReady } from './content/artifacts.js';
import { configureApp } from './create-app.js';
import { env } from './env.js';

await assertArtifactsReady();

const app = express();
configureApp(app);

/** Vercel Fluid / Functions: default export. Local: listen. */
export default app;

if (!process.env.VERCEL) {
  app.listen(env.port, '0.0.0.0', () => {
    console.log(`readystate-backend-demo listening on http://0.0.0.0:${env.port}`);
    console.log(`health: GET /v1/health`);
    console.log(`cors: ${env.corsOrigins.join(', ')}`);
  });
}
