# USC AutoDrive Lab Website

Welcome to behind the scenes of
[uscautodrivelab.github.io](https://uscautodrivelab.github.io)! This website is
built with [React](https://reactjs.org/) and [MUI](https://mui.com/).

| Type                          | Name                                                               | Related Folder(s) / File(s)                                        | Description                                                                             |
| ----------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Package Manager               | [pnpm](https://pnpm.io/)                                           | [package.json](package.json) <br> [pnpm-lock.yaml](pnpm-lock.yaml) | Package manager that facilitates efficient management and installation of dependencies. |
| Build Tool                    | [Vite](https://vitejs.dev/)                                        | [vite.config.ts](vite.config.ts)                                   | Build tool that provides fast and efficient development experience.                     |
| Static Type Checker           | [TypeScript](https://www.typescriptlang.org/)                      | [tsconfig.json](tsconfig.json)                                     | Static type checker that helps catch type-related bugs early.                           |
| UI Libraries                  | [React](https://reactjs.org/) <br> [MUI](https://mui.com/)         | [src/main.tsx](src/main.tsx) <br> [src/components](src/components) | UI libraries that provide a rich set of components and utilities.                       |
| Client Router (Not added yet) | [React Router](https://reactrouter.com/)                           | [src/main.tsx](src/main.tsx)                                       | Client-side router that enables navigation without page reloads.                        |
| CI/CD                         | [GitHub Actions](https://github.com/features/actions)              | [.github/workflows](.github/workflows)                             | CI/CD tool that automates the build, test, and deployment processes.                    |
| Code Linter                   | [ESLint](https://eslint.org/)                                      | [eslint.config.js](eslint.config.js)                               | Code linter that helps maintain consistent code style.                                  |
| Code Formatter                | [Prettier](https://prettier.io/)                                   | [.prettierrc.yaml](.prettierrc.yaml)                               | Code formatter that helps maintain consistent code style.                               |
| Commit Linter                 | [commitlint](https://github.com/conventional-changelog/commitlint) | [.commitlintrc.json](.commitlintrc.json)                           | Commit linter that checks if commit messages meet a certain format.                     |
| Git Hooks                     | [husky](https://typicode.github.io/husky/#/)                       | [.husky](.husky)                                                   | Git hooks that run tasks before/after Git commands.                                     |

## Develop Locally

### Prerequisites

Please install/update the following software before moving on:

- [Git](https://git-scm.com/)
- [Node.js v18 (LTS)](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/) with the following extensions
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Step 1: Initial Setup

- Clone this repository

- Install/update [pnpm](https://pnpm.io/) v7 (Faster, more disk space efficient
  package manager than `npm`).

- Run `pnpm install` in the cloned repo to install project dependencies.

### Step 2: Start Developing

- Run `pnpm dev` to start a [Vite](https://vitejs.dev/) dev server with Hot
  Reload support.

## Coding Styles

- Follow rules configured in [ESLint](./.eslintrc.yml) and
  [Prettier](./.prettierrc.yaml) (automatically enforced by Git hooks).
- One file should be no longer than 300 lines.
- Avoid class components. Use functional components whenever possible.
- JavaScript files are not allowed. All code must be in TypeScript with all
  properties and function signitures typed.
  - Typing is not required for local variables/consts when the type can be
    correctly inferred by Language Server.
- Avoid styling through `style` prop or CSS files:
  - Use MUI `sx` prop instead of to support theme-aware styling.
  - Use MUI system shorthand props for
    [spacing](https://mui.com/system/spacing/), such as `p`, `mx`, `mb`, for
    spacing.
- Avoid using `div` or `span` for layouts!
  - Use [MUI Stack component](https://mui.com/material-ui/react-stack/) for a
    CSS flex-box container.
  - Use [MUI Box component](https://mui.com/material-ui/react-box/) for a
    general container.
  - You may also use other MUI Layout components.
- Use [MUI Typography component](https://mui.com/material-ui/react-typography/)
  for texts instead of `p`, `span`, `h1`, `h2`, `h3`, etc.

## CI/CD Pipelines

CI/CD pipelines are implemented using GitHub Actions. Workflow files are defined
in [.github/workflows](.github/workflows).

| Pipeline                                                                    | Deployed site                                                  | Trigger                  | Description                    |
| --------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------ | ------------------------------ |
| [github-pages-deploy.yml](.github/workflows/github-pages-deploy.yml) (Prod) | [uscautodrivelab.github.io](https://uscautodrivelab.github.io) | on Push to `main` branch | Build and deploy to prod site. |

### Explanation of Steps Defined in `github-pages-deploy.yml`

- The pipeline is triggered on push to the `main` branch.
- The pipeline has two jobs: `build` and `deploy`.
- The `build` job installs dependencies, builds the project, and uploads the
  production-ready build files as an artifact.
- The `deploy` job downloads the artifact and deploys the production-ready
  build.
- The pipeline uses a GitHub token stored in the repository secrets to deploy
  the production-ready build to [GitHub Pages](https://pages.github.com/).

## Git Hooks

When you try to make a Git commit, the following happens in the background:

- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) lint and
  format your code.
- [commitlint](https://github.com/conventional-changelog/commitlint) checks if
  your commit message meets the
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.
