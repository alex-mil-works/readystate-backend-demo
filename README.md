# readystate-backend-demo

Private content API + curriculum authoring for ReadyState. **No database.**

Sibling frontend: [`../readystate-frontend-demo`](../readystate-frontend-demo).

## Quick start

```bash
yarn install
cp .env.example .env
yarn content:compile   # .courses → artifacts/
yarn dev               # http://localhost:3001
```

Production-style: `yarn start` (compiles first via `prestart`). Deploy: [`.github/DEPLOY.md`](.github/DEPLOY.md) (CI → Vercel, same as FE).

## API

| Endpoint | Body |
| --- | --- |
| `GET /v1/health` | `{ ok, artifacts }` — `503` if not compiled |
| `GET /v1/disciplines` | `{ roles }` |
| `GET /v1/courses/:roleId/:stackId` | `{ course }` |

Access limits come later. For now the API serves the full compiled curriculum to the frontend.

## Content

| Path | Role |
| --- | --- |
| `.courses/` | Source of truth (YAML/MD) — **committed** |
| `artifacts/` | Compiled JSON — gitignored; regenerate with `yarn content:compile` |

```bash
yarn content:compile
yarn test:run
yarn typecheck
```

Compile when YAML changes — **not** on every `yarn dev` (dev assumes you compiled once).

## Env

| Variable | Meaning |
| --- | --- |
| `PORT` | default `3001` |
| `CORS_ORIGIN` | Allowed browser origins (comma-separated) |
| `COURSES_DIR` | optional override (default `.courses`) |
