This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variable Configuration

Environment variable `NEXT_PUBLIC_PROJECT_ID` is required to start the project. You can visit [WalletConnect dashboard](https://cloud.walletconnect.com/) to get the project id.

Run

```sh
cp .env.sample .env
```

to create the `.env` file and then fill the `NEXT_PUBLIC_PROJECT_ID` with the project id get from WalletConnect dashboard.

> A temporary project id `19301a87a841afbb902273cd078b5d9d` can be used if you are running the project on `http://127.0.0.1:3000`. This project id is created by Conflux developer for local debugging and anyway we recommend you to create a project id by yourself.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Note: You need to fill the environment variable field, ensuring `NEXT_PUBLIC_PROJECT_ID` can be found for production build.
