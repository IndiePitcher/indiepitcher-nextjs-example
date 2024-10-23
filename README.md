This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup

- Sign up for a free [IndiePitcher account](https://indiepitcher.com)
- Create a project
- Generate an API key
- Create `.env.local` file and add the API key `INDIEPITCHER_API_KEY=sc_xxxxxxxxxx`


## Try the examples
- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000).
- Look at actions under `src/app/actions`, you'll probably want to update the email to your email address.
- Try the examples.

Please note that all the code sending emails is inside actions that will be run on the server, and not the client frontend code. This is intentional to avoid leaking your IndiePitcher API key.
