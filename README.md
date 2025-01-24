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
8. In `server` directory, create `.env.development` and add:

```plaintext
MONGODB_URI=mongodb://127.0.0.1:27017/techquiz
```

9. In `server` directory, create `env.production` and add:

```plaintext
MONGODB_URI=mongodb+srv://you MongoDB Atlas connection string
```

10. In `server` directory, run build and start scripts:

```zsh
npm run build
npm run start
```

11. In `root` directory, open cypress:

```zsh
npm run test-gui
```

12. In `root` directory, create .github/workflows:

```zsh
mkdir -p .github/workflows
```

13. In `.github/workflows`, create yml files:

```zsh
touch .github/workflows/deploy-to-render.yml
touch .github/workflows/test-on-pr.yml
```

14. In Render dashboard, create a new web service and connect your repo.

15. After the service is created, disable auto-deploy and copy the deploy hook URL.

16. Add a new secret to your github repo:

```plaintext
Name: RENDER_DEPLOY_HOOK_URL
Value: deploy hook url copied from render
```
17. Update `deploy-to-render.yml` with secret.

18. In settings of your github repo, access Branches and add branch ruleset:

```plaintext
Ruleset Name: github-actions
Target by inclusion pattern: develop
Branch Rules: check require a pull request before merging, check require status checks to pass, add checks
```


