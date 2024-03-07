# Yutu

Yutu is a Youtube player bootstrapped with: [Vite](https://github.com/vitejs/vite), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/), [Lint Staged](https://github.com/okonet/lint-staged), [Styled Components](https://styled-components.com/), [React Query](https://tanstack.com/query), [Zod](https://zod.dev/).

This contains most of the common setup and best practices to start creating unique apps at a steady rate.

## Quick start

- Clone the repo
- Duplicate `.env.example` and rename it to `.env`
- Add your youtube api url to the `.env` file
- Run:

```bash
npm run install
```

```bash
npm run dev
```

For storybook run:

```bash
npm run storybook
```

## Notes
- Project is using custom simple rest api for managing playlists, built with cloudflare workers and workers kv store. You can find the source code [here](https://github.com/daroxs95/yutu-be), and the open api [here](https://yutu-be.daroxs95.workers.dev/).