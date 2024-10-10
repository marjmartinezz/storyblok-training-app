## Introduction 📖

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), utilising [TypeScript](https://www.typescriptlang.org/) to strongly check types/props and provide helpful intelisense, and the utility-first CSS framework [Tailwind](https://tailwindcss.com/) as the styling library and the headless CMS [StoryBlok](https://www.storyblok.com/).

## Running This Project 🚀

Prerequisites:
1. Make sure you already have storyblok account

To run this project, follow the instructions below:

1. Open the terminal, and navigate the root directory for this project.
2. Add in the environment variables in a `.env.development` file. More information found in the next section.
3. Run `npm install`, and wait for dependencies to install.
4. Run `npm run dev` or `yarn dev` or `pnpm dev`, where a local instance of this website will be initiated e.g localhost:3000
5. Run `npm run proxy`, where a local proxy will run

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables 🔒

There are a few environmental variables required to run this project. As mentioned previously, each website setup requires it's own `.env.development` file within it's root directory.

The required variables are:

-   **STORYBLOK_TOKEN**: Found within the relevant project on our StoryBlok account

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
