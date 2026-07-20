# syntax=docker/dockerfile:1

# --- build ---
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
# Lockfile is generated with npm 12; node:22-alpine ships npm 10.
RUN npm install -g npm@12.0.1 && npm ci

COPY . .

# Only NUXT_PUBLIC_* values are safe to bake into a public client bundle.
ARG NUXT_PUBLIC_API_BASE=
ENV NUXT_PUBLIC_API_BASE=$NUXT_PUBLIC_API_BASE
ENV NODE_ENV=production

RUN npm run generate

# --- serve ---
FROM nginx:1.27-alpine AS runner

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.output/public /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
