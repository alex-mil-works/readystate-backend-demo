# Deploy

Production deploy is documented in **[`.github/DEPLOY.md`](.github/DEPLOY.md)** (CI approval → Vercel), same pattern as the frontend.

Quick local / Docker notes remain below.

## Local

```bash
yarn install
cp .env.example .env
yarn build          # .courses → artifacts/
yarn start          # or yarn dev
```

Health: `GET /v1/health`.

## Docker (optional host)

```bash
docker build -t readystate-api .
docker run --rm -p 3001:3001 \
  -e CORS_ORIGIN=https://<your-fe>.vercel.app \
  readystate-api
```

## Env

| Variable      | Notes |
| ------------- | ----- |
| `PORT`        | default `3001` (local / Docker) |
| `CORS_ORIGIN` | comma-separated FE origins (**required in prod**) |
