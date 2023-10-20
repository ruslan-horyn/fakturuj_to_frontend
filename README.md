
# Fakturuj.to (frontend) - Products

## Description

This project was created as a test task in recruiting processes at [Fakturuj.to](https://fakturuj.to/).
The goal of this project is - to create a simple web application for creating products.

This application should be able to:

- create, read, update, delete products (CRUD)
- validate form inputs
- form should use [Formik](https://formik.org/), [Redux](https://redux.js.org/), [TypeScript](https://www.typescriptlang.org/), [React-Router](https://reactrouter.com/en/main), [Styled-components](https://styled-components.com/)

___

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- npm package manager
- running backend application [fakturuj_to_backend](https://github.com/ruslan-horyn/fakturuj_to_backend)

## How to Run the Project

Before running the project, you need to install the necessary dependencies.

```bash
npm install
```

## Running in Development Mode

To run the project in development mode with live reloading, you can use the `dev` script:

```bash
npm run dev
```

## Building the Project

To transpile the TypeScript code to JavaScript, you can use the `build` script:

```bash
npm run build
```

### Preview Mode

After building the project, you can run `preview` script for previewing the pre-production build:
  
  ```bash
  npm run preview
  ```

Attention: You can preview the pre-production build locally of you have pre-production environment in your local machine. You need to create `.env.production.local` file from .env.development

### Running Tests

To run tests, you can use the `test` script:

  ```bash
  npm run test
  ```
