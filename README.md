# github-actions-pipeline

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)

## Description

Create a CI/CD pipeline using GitHub Actions to run component tests with Cypress.

## Installation

To get started with this project, implement the following steps:

1. Clone the repo:

```zsh
git clone git@github.com:gina-t/CI-CD-pipeline.git

```

2. In `root` directory, install dependencies:

```zsh
npm install @vitejs/plugin-react vitest
npm install concurrently cypress react react-dom ts-node --save-dev
```

3. In `server` directory, install dependencies:

```zsh
npm install express mongoose
npm install @types/express @types/node dotenv msw nodemon typescript vitest --save-dev
```
4. Add the following nodemonConfig to `server/package.json`:

```json
{
"nodemonConfig": {
  "watch": [
    "src"
  ],
  "ext": "ts,json,js",
  "excec": "npx tsc && node dist/server.js"
  }
}
```
5. In `client` directory, install dependencies:

```zsh
npm install bootstrap jwt-decode react react-bootstrap react-dom react-router-dom vitest 
npm install @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/react @types/react-dom @vitejs/plugin-react @vitest/ui eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh jsdom msw vite --save-dev
```
6. Configure TypeScript:

- `root/tsconfig.json` contains base configuration with references:

```json
{
"references": [
{"path": "./server"},
{"path": "./client"},
{"path": "./cypress"}
]
}
```

- `server/tsconfig.json` extends root and adds settings specific to the server-side including typeRoots:

```json
{
"include": ["src"]
"typeRoots": ["./node_modules/@types", "./src/types"]
}
```

- `client/tsconfig.json` contains client specific configuration and references:

```json
{
"references": [{ "path": "./tsconfig.node.json" }]
}
```
8. In `server` directory, create `.env` and add:

```plaintext
MONGODB_URI=mongodb://127.0.0.1:27017/techquiz
```
9. In `server`, run build and start scripts:

```zsh
npm run build
npm run start
```
10. Seed the database:

```zsh
npm run seed
```

11. In `root` directory, open cypress:

```zsh
npx cypress open
```
