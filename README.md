# Yutu

Yutu is a Youtube player bootstrapped
with: [Vite](https://github.com/vitejs/vite), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/), [Lint Staged](https://github.com/okonet/lint-staged), [Styled Components](https://styled-components.com/), [React Query](https://tanstack.com/query), [Zod](https://zod.dev/).

This contains most of the common setup and best practices to start creating unique apps at a steady rate.

## Quick start

- Clone the repo
- Duplicate `.env.example` and rename it to `.env` (Not needed for the moment)
- Add your youtube api url to the `.env` file (Not needed for the moment)
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

## Notes / Features

- Project is using custom simple rest api for managing playlists, built with cloudflare workers and workers kv store.
  You can find the source code [here](https://github.com/daroxs95/yutu-be), and the open
  api [here](https://yutu-be.daroxs95.workers.dev/).
- App url in videos search view is always updated with current search query
- Global video player, so you can keep watching videos while navigating through the app
- Module based clean architecture project structure
- Slug based routing for playlists
- Video addition to multiple playlist at once
- Only allow adding videos to playlist if they are not already in the playlist
- Custom app theme abstraction
- Playlists deletion
- Real time playlist updates due deletions or video additions by self

## Roadmap

- Improve API error handling
- Use more status codes for API responses
- Add toast notifications
- Improve responsiveness
- Add close on click outside for modals
- Move video playback and controls to app instead of iframe
- Remove the few coupling cases between modules