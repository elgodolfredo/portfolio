This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech Stack

- **Next.js 16.1.6** (with Turbopack)
- **React 19.2.4**
- **TypeScript 5**
- **Chakra UI 2.10.9**
- **Three.js 0.161.0**
- **Node.js 22.18.0**

## Migration Notes

This project was upgraded from Next.js 14.0.4 to 16.1.6 on February 16, 2026, using an incremental migration strategy (14 → 15 → 16). See [UPGRADE_LOG.md](./UPGRADE_LOG.md) for detailed migration notes and performance improvements.

Key improvements after migration:
- **3.5× faster production builds** (15s → 4.3s)
- **5.9× faster dev server startup** (~2s → 340ms)
- Default Turbopack bundler for improved performance

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
