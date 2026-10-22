/** Load env and expose typed config. Keep this file free of Express. */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ARTIFACTS_DIR_RELATIVE } from './content/content-source.js';

function requiredInt(name: string, fallback: number): number {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === '') return fallback;
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n)) {
    throw new Error(`Invalid ${name}=${raw}`);
  }
  return n;
}

function parseCorsOrigins(raw: string | undefined): string[] {
  if (!raw || raw.trim() === '') {
    return ['http://localhost:5173', 'http://127.0.0.1:5173'];
  }
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Artifacts live at `<cwd>/artifacts`.
 * Local: run via yarn from repo root. Vercel: `includeFiles` lands under `/var/task`.
 * Prefer cwd over `import.meta.url` so a bundled entry still finds compiled JSON.
 */
export const env = {
  port: requiredInt('PORT', 3001),
  corsOrigins: parseCorsOrigins(process.env.CORS_ORIGIN),
  repoRoot,
  artifactsDir: path.join(process.cwd(), ARTIFACTS_DIR_RELATIVE),
};
