# Article Editor App

A React web app that aims to allow the modification of article information for Intelligent Tagging projects.

## Stack

This project is powered by :

- [Next.js](https://nextjs.org/docs) (framework based on [React](https://reactjs.org/))
- [Mantine UI](https://mantine.dev/) (UI components library)


## Getting Started

First, run the development server :

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Structure

The project follows the following file base structure :

```
├── /components
│   ├── /structure            
│   │   ├── MainLayout.tsx    <- Providers layers.
│   │   └── PageLayout.tsx    <- Common pages visible elements.
│   └── /...                  <- Future components.   
│   
├── /pages                    <- Routed pages components.
│   ├── /articles         
│   │   └── [id].tsx          <- Article editor page (using a dynamic id).
│   │
│   ├── _app.tsx              <- Layout applied to all pages.        
│   └── index.tsx             <- Home page.
│   
├── /public                   <- Static files.
├── /style                    <- CSS files.
│   
├── /utils
│   ├── globals.tsx           <- Variables to use globally.
│   └── types.tsx             <- Typescript definitions.       
```