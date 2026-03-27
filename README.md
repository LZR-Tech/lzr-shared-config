# @lzr/shared-config

Configurações compartilhadas de desenvolvimento da **LZR Technologies**.

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
