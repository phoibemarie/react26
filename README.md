# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



NOTES 
1.  .git/: is an invisible directory created by Git to maintain version control. You may not see it if your operating system hides directories and files that start with a ".". VS Code also will hide this directory by default.

2.  .gitignore: this file lists all those files and directories that should not be tracked with version control.

3.  README.md: this file contains pertinent information about the project. We keep this up to date with details such as a project description and steps that others need to take to run or work with the project.

4.  eslint.config.js: is used to configure ESLint, a tool used to identify syntax problems or common anti-patterns.

5.  index.html: this file is the entry point for the application.


6.  package.json: this file contains details about the project, some scripts aliases, and a list of all the packages that the project is dependent upon.

7.  public: this is a directory is used to hold static assets like images and fonts that we want to remain unchanged.

8.  src: this directory contains the majority of the working files for the application.

9.  vite.config.js: this file sets configuration options for Vite