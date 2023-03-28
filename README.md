Notes for building the React App

Create Vite/React/Typescript App
    npx create-vite

Install TailWind:
    https://dev.to/ethand91/creating-a-react-app-with-typescript-tailwind-support-18b8

    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p

    Next open up the created "tailwind.config.js" file and add the following to "content":
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],

    Next we need to add the Tailwind directives to the "src/index.css" file, add the following to the top of the file:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Install react-router-dom:
npm i react-router-dom

Install @mui and @emotion:
npm install @mui/material @emotion/styled

Install react hook form:
npm install react-hook-form

Install redux:
npm install @reduxjs/toolkit
npm install react-redux

Install data grid:
npm install @mui/x-data-grid

For Auth, follow directions on Firebase for a new project:
Don't forget to enable google within "get started" - "sign in method"

Breaks typescript into JS for production
npm run build