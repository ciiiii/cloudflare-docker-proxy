# cloudflare-docker-proxy

![deploy](https://github.com/ciiiii/cloudflare-docker-proxy/actions/workflows/deploy.yaml/badge.svg)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ciiiii/cloudflare-docker-proxy)

> If you're looking for proxy for helm, maybe you can try [cloudflare-helm-proxy](https://github.com/ciiiii/cloudflare-helm-proxy).

## Deploy

1. click the "Deploy With Workers" button
2. follow the instructions to fork and deploy
3. update routes as you requirement

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ciiiii/cloudflare-docker-proxy)

## Routes configuration tutorial

1. use cloudflare worker host: only support proxy one registry
   ```javascript
   const routes = {
     "${workername}.${username}.workers.dev/": "https://registry-1.docker.io",
   };
   ```
2. use custom domain: support proxy multiple registries route by host
   - host your domain DNS on cloudflare
   - add `A` record of xxx.example.com to `192.0.2.1`
   - deploy this project to cloudflare workers
   - add `xxx.example.com/*` to HTTP routes of workers
   - add more records and modify the config(src/index.js) as you need
   ```javascript
   const routes = {
  // production
  "docker.liebe.pub": dockerHub,
  "quay.liebe.pub": "https://quay.io",
  "gcr.liebe.pub": "https://gcr.io",
  "k8s-gcr.liebe.pub": "https://k8s.gcr.io",
  "k8s.liebe.pub": "https://registry.k8s.io",
  "ghcr.liebe.pub": "https://ghcr.io",
  "cloudsmith.liebe.pub": "https://docker.cloudsmith.io",
  "ecr.liebe.pub": "https://public.ecr.aws",

  // staging
  "docker-staging.liebe.pub": dockerHub,
  };
   ```

