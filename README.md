# cloudflare-docker-proxy

![deploy](https://github.com/fengqing944/cloudflare-docker-proxy/actions/workflows/deploy.yaml/badge.svg)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fengqing944/cloudflare-docker-proxy)

> If you're looking for proxy for helm, maybe you can try [cloudflare-helm-proxy](https://github.com/fengqing944/cloudflare-docker-proxy).

## Deploy

1. click the "Deploy With Workers" button
2. follow the instructions to fork 和 deploy
3. update routes as you requirement

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fengqing944/cloudflare-docker-proxy)

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
   - add more records and modify the config as you need
   ```javascript
   const routes = {
     "docker.myasmr.com": "https://registry-1.docker.io",
     "quay.myasmr.com": "https://quay.io",
     "gcr.myasmr.com": "https://k8s.gcr.io",
     "k8s-gcr.myasmr.com": "https://k8s.gcr.io",
     "ghcr.myasmr.com": "https://ghcr.io",
   };
   ```

