# Matthew E. — Systems Atlas

The source for [matthewe.me](https://matthewe.me), Matthew's full-stack engineering and systems portfolio.

## Local development

```powershell
npm ci
npm run dev
```

Before delivery, run `npm run lint`, `npm run typecheck`, and `npm run build`.

Production images are published to `ghcr.io/matt11matthew/portfolio`. Runtime configuration, Caddy routing, health checks, and module-scoped reconciliation are owned by the separate `matt11matthew/deployment` repository.
