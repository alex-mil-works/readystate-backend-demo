# Deploy (CI approval → Vercel)

Deploy is the last job in [`.github/workflows/ci.yml`](workflows/ci.yml). It runs **only on push to `main`**, after typecheck, tests, and content compile. PRs run CI but skip deploy.

Vercel Git auto-deploy stays off (`vercel.json` → `"git.deploymentEnabled": false`).

Build / runtime environment: **GitHub Variables + Secrets**, not Vercel Project Settings.

## 1. GitHub Environment (approval gate)

Uses the repo environment **`Production`**:

1. **Settings → Environments → Production**
2. **Required reviewers** — e.g. your GitHub user
3. **Allow administrators to bypass** — off (recommended)

The deploy job waits here until a reviewer approves.

Optional: **Deployment branches** → limit to `main` only.

## 2. One-time: Vercel

1. **Add New Project → Import** this GitHub repo (`readystate-backend-demo`)
2. Framework: **Express** (or Other). Root directory: `.`
3. Confirm Git auto-deploy is off (also enforced by `vercel.json`)
4. Project → **Settings → Environment Variables** → **delete all** (GitHub is source of truth)
5. Copy **Project ID** → secret `VERCEL_PROJECT_ID` (`prj_…`)
6. Copy **Team / Org ID** → secret `VERCEL_ORG_ID` (`team_…`)
7. Create token: [vercel.com/account/tokens](https://vercel.com/account/tokens) → secret `VERCEL_TOKEN`  
   Use a **full account token** (not project-scoped). Token must have access to the team that owns the project.

## 3. GitHub Variables (repository)

**Settings → Secrets and variables → Actions → Variables**:

| Name          | Value |
| ------------- | ----- |
| `CORS_ORIGIN` | `https://readystate-frontend-demo.vercel.app` (comma-separated; add `http://localhost:5173` only if local FE hits prod API) |

## 4. GitHub Secrets (repository)

**Settings → Secrets and variables → Actions → Secrets**:

| Name                | Value            |
| ------------------- | ---------------- |
| `VERCEL_TOKEN`      | Vercel API token |
| `VERCEL_ORG_ID`     | Team/org ID      |
| `VERCEL_PROJECT_ID` | Project ID       |

Repository-level secrets are enough. **Important:** if the same secret names exist under **Environment → Production**, those values **override** repository secrets — empty or wrong environment secrets break deploy.

## 5. Deploy flow (after push to `main`)

1. CI runs: typecheck → Vitest → `yarn build` (`.courses/` → `artifacts/`)
2. Job **Deploy to Vercel (approval)** waits on environment **Production**
3. Open the workflow run → **Review deployments** → **Approve and deploy**
4. Job runs `vercel build --prod` + `vercel deploy --prebuilt --prod` with `CORS_ORIGIN`
5. Live API URL appears in the job Summary — use it as FE `VITE_CONTENT_API_URL`

Deploy always uses `--prod` (production Vercel alias).

## 6. Wire FE

1. Note this API’s HTTPS origin (no trailing slash)
2. On the **frontend** repo: Variable `VITE_CONTENT_API_URL` = that origin
3. This repo: Variable `CORS_ORIGIN` includes the FE production URL
4. Redeploy FE so the Vite build embeds the API URL
5. Check `GET /v1/health` → `200` and that the SPA loads courses

## 7. Verify

- `GET https://<api>/v1/health` → `{ ok, artifacts }` with artifacts ready
- `GET /v1/disciplines` returns roles
- Browser from FE origin: no CORS errors
- New push to `main` does not go live until approved

## FAQ

**`User not found` (404) on `vercel pull`?**  
Do **not** pass `--scope=$VERCEL_ORG_ID`. CLI `--scope` expects a **team slug**, not `team_…`. The workflow uses env `VERCEL_ORG_ID` + `VERCEL_PROJECT_ID` only — no `--scope`.

**`Could not retrieve Project Settings` on pull/build?**  
Token must be a **full account** token with team access. `VERCEL_ORG_ID` = Team ID (`team_…`); `VERCEL_PROJECT_ID` = `prj_…`. The API check step must return HTTP 200.

**`No Project Settings found locally` on `vercel build`?**  
CLI needs a successful `vercel pull` first. Check secrets — **Environment → Production** overrides repository secrets if set (even empty).

**Why approval?**  
Separates “CI passed” from “ship to prod”.

**New push while waiting?**  
CI uses `cancel-in-progress: true`; a newer push may cancel the pending run. Approve promptly or deploy from the commit you want.

**Secrets vs Vercel env?**  
Not synced. Vercel project env should stay empty. The deploy job passes `CORS_ORIGIN` with `vercel deploy --prebuilt --env CORS_ORIGIN=…` from the GitHub Variable (Express needs **runtime** env; build-time `.env` files alone are not enough).

**FE shows `Failed to fetch` but `/v1/disciplines` is 200 in Vercel logs?**  
Almost always CORS: response has no `Access-Control-Allow-Origin`. Check `GET /v1/health` → `corsOrigins` must include `https://readystate-frontend-demo.vercel.app`, then redeploy BE after fixing the Variable.

**503 / artifacts not ready?**  
Build must run `yarn content:compile`. `vercel.json` `buildCommand` is `yarn build`. `includeFiles: artifacts/**` ships compiled JSON with the function.

**Local vs Vercel entry?**  
`src/index.ts` must `import express` and call `express()` in that file (Vercel entrypoint detection), then `configureApp`. Default-exports the app; locally it also `listen`s when `VERCEL` is unset.

**`No entrypoint found which imports express`?**  
The entry file cannot only re-export an app created in another module — keep `import express from 'express'` + `express()` in `src/index.ts`.
