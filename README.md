<h1 align="center">Typings for Telegram Mini Apps</h1>

<p align="center">
<a href="https://npmjs.com/package/telegram-webapps"><img alt="Version" src="https://img.shields.io/npm/v/telegram-webapps"/></a>
<a href="https://npmjs.com/package/telegram-webapps"><img alt="License MIT" src="https://img.shields.io/npm/l/telegram-webapps"/></a>
<a href="https://npmjs.com/package/telegram-webapps"><img alt="npm" src="https://img.shields.io/npm/dt/telegram-webapps"/></a>
</p>
<p align="center">
<a href="https://core.telegram.org/bots/webapps"><img alt="Telegram Bot API Version 9.1" src="https://img.shields.io/badge/Telegram%20Bot%20API-9.1-blue.svg?logo=telegram"/></a>
</p>
<p align="center">
<a href="https://github.com/DavisDmitry/telegram-webapps/actions/workflows/lint.yml"><img alt="CI Lint" src="https://github.com/DavisDmitry/telegram-webapps/actions/workflows/lint.yml/badge.svg"/></a>
</p>

---

<p align="center"><a href="https://core.telegram.org/bots/webapps">About Telegram Mini Apps</a></p>

---

## Usage

### Installation

via `npm` :

```bash
npm install telegram-webapps --save-dev
```

via `yarn` :

```bash
yarn add -D telegram-webapps
```

via `pnpm` :

```bash
pnpm add -D telegram-webapps
```

### Use typings

Include the types file inside your [ `tsconfig.json` ](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file like this:

```diff
{
  "compilerOptions": {
    "types": [
+     "./node_modules/telegram-webapps"
    ]
  }
}
```

Use `Telegram` constant inside your client-side code to get `WebApp` object:

```typescript
// informs the Telegram app that the Web App is ready to be displayed
Telegram.WebApp.ready()
```
