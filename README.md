# Campus Map KZ — Frontend

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

## Docker

```bash
# build & run on port 80
docker compose up -d --build

# or another host port
PORT=8080 docker compose up -d --build
```

Optional public API base at build time:

```bash
NUXT_PUBLIC_API_BASE=https://api.example.com docker compose up -d --build
```

Stop:

```bash
docker compose down
```