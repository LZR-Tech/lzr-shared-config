# @lzr/shared-config — DEPRECATED

> ⚠️ **Este repo está descontinuado em 2026-05-05.**
>
> O monorepo workspace causava problemas de resolução de imports quando instalado via `github:` deps (cada `@lzr/*` carregava o `package.json` raiz que não declarava `main`/`exports`, exigindo o subpath gambiarra `@lzr/tsconfig/packages/tsconfig/...`).
>
> Os 4 pacotes foram **separados em repos standalone**. Use os novos repos diretamente:
>
> | Antes (deprecated) | Agora |
> |---|---|
> | `github:LZR-Tech/lzr-shared-config#main` (como `@lzr/tsconfig`) | [`github:LZR-Tech/lzr-tsconfig#main`](https://github.com/LZR-Tech/lzr-tsconfig) |
> | `github:LZR-Tech/lzr-shared-config#main` (como `@lzr/eslint-config`) | [`github:LZR-Tech/lzr-eslint-config#main`](https://github.com/LZR-Tech/lzr-eslint-config) |
> | `github:LZR-Tech/lzr-shared-config#main` (como `@lzr/prettier-config`) | [`github:LZR-Tech/lzr-prettier-config#main`](https://github.com/LZR-Tech/lzr-prettier-config) |
> | `github:LZR-Tech/lzr-shared-config#main` (como `@lzr/commitlint-config`) | [`github:LZR-Tech/lzr-commitlint-config#main`](https://github.com/LZR-Tech/lzr-commitlint-config) |
>
> ### Migração (em projetos existentes)
>
> 1. No `package.json`, trocar as 4 linhas que apontam para `lzr-shared-config` pelos novos repos.
> 2. No `tsconfig`, trocar `extends: "@lzr/tsconfig/packages/tsconfig/X"` por `extends: "@lzr/tsconfig/X"`.
> 3. No `eslint.config.mjs`, trocar `from '@lzr/eslint-config/packages/eslint-config/index.mjs'` por `from '@lzr/eslint-config'`.
> 4. `pnpm install` e validar gate (`pnpm type-check && pnpm lint && pnpm test`).
>
> Este repo será **arquivado** quando todos os projetos LZR estiverem migrados.

---

## Histórico

Configurações compartilhadas de desenvolvimento da **LZR Technologies** — versão monorepo.

Baseado no [Engineering Handbook](https://code.lzrtechnologies.com).

## Pacotes

| Pacote | Descrição | Uso |
|--------|-----------|-----|
| `@lzr/tsconfig` | TypeScript strict mode configs | `"extends": "@lzr/tsconfig/tsconfig.node.json"` |
| `@lzr/eslint-config` | ESLint flat config (zero any, imports, naming) | `import { base } from '@lzr/eslint-config'` |
| `@lzr/prettier-config` | Prettier (single quotes, no semi, 100 width) | `"prettier": "@lzr/prettier-config"` |
| `@lzr/commitlint-config` | Conventional Commits | `"extends": ["@lzr/commitlint-config"]` |

## Instalação rápida

### Projeto Node/API

```bash
npm install -D @lzr/tsconfig @lzr/eslint-config @lzr/prettier-config @lzr/commitlint-config
```

**tsconfig.json:**
```json
{
  "extends": "@lzr/tsconfig/tsconfig.node.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

**eslint.config.mjs:**
```js
import { node } from '@lzr/eslint-config'
export default [...node]
```

**package.json (prettier):**
```json
{
  "prettier": "@lzr/prettier-config"
}
```

**commitlint.config.js:**
```js
module.exports = { extends: ['@lzr/commitlint-config'] }
```

### Projeto Next.js

```bash
npm install -D @lzr/tsconfig @lzr/eslint-config @lzr/prettier-config @lzr/commitlint-config
```

**tsconfig.json:**
```json
{
  "extends": "@lzr/tsconfig/tsconfig.next.json",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**eslint.config.mjs:**
```js
import { react } from '@lzr/eslint-config'
export default [...react]
```

### Projeto React Native / Expo

**tsconfig.json:**
```json
{
  "extends": "@lzr/tsconfig/tsconfig.react-native.json"
}
```

## Configs disponíveis

### TypeScript (`@lzr/tsconfig`)

| Config | Stack | Uso |
|--------|-------|-----|
| `tsconfig.base.json` | Base compartilhada | Não usar diretamente |
| `tsconfig.node.json` | APIs Node.js | `"extends": "@lzr/tsconfig/tsconfig.node.json"` |
| `tsconfig.next.json` | Next.js App Router | `"extends": "@lzr/tsconfig/tsconfig.next.json"` |
| `tsconfig.react-native.json` | Expo / React Native | `"extends": "@lzr/tsconfig/tsconfig.react-native.json"` |

### ESLint (`@lzr/eslint-config`)

| Export | Stack | Regras |
|--------|-------|--------|
| `base` | Qualquer TypeScript | Zero any, imports organizados, naming conventions |
| `node` | APIs Node.js | Base + no magic numbers |
| `react` | React / Next.js | Base + JSX rules |

### Prettier (`@lzr/prettier-config`)

- Sem ponto-e-vírgula
- Aspas simples
- Trailing comma em tudo
- 100 caracteres por linha
- 2 espaços de indentação
- Plugin Tailwind CSS

### CommitLint (`@lzr/commitlint-config`)

Tipos permitidos: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `security`, `style`, `perf`, `ci`, `build`, `revert`

```
feat: adds dashboard feature
fix: corrects timeout bug
security: fixes SQL injection
```

## Referência

- [LZR Engineering Handbook](https://code.lzrtechnologies.com)
- [Conventional Commits](https://www.conventionalcommits.org/)
