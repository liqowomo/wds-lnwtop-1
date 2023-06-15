<img src="https://i.ytimg.com/vi/NgayZAuTgwM/hq720.jpg" align="right" width="300">

---

<h1 align="center"><code>EDS-LNWTOP-1 </code></h1>
<h2 align="center"><i> W1 Branch  </i></h2>

---

1. [fK ?](#fk-)
2. [Comms](#comms)
   1. [New NEXTJS](#new-nextjs)
   2. [Tailwind Prettier Plugin](#tailwind-prettier-plugin)
   3. [Prisma Install](#prisma-install)
      1. [Initializing PNPM Sqlite](#initializing-pnpm-sqlite)
   4. [Migrate scheme to sqlite](#migrate-scheme-to-sqlite)
3. [Special Note](#special-note)
4. [Dira](#dira)

---

# fK ?

[`Learn Next.js 13 With This One Project`](https://youtu.be/NgayZAuTgwM)

- Repo is work for lickandsuckbbgirlanusss

# Comms

1. Commands used t get this shits running

## New NEXTJS

```sh
pnpm dlx create-next-app@latest
```

## Tailwind Prettier Plugin

```sh
pnpm i -D prettier prettier-plugin-tailwindcss
```

- This will install it as devdependency

## Prisma Install

This project requires PRISMA , since we are making a db using sqlite which will a single file db

```sh
pnpm i -D prisma
```

### Initializing PNPM Sqlite

```sh
pnpm dlx prisma init --datasource-provider sqlite
```

## Migrate scheme to sqlite

This will migrate the scheme to sqlite, which means it will create a single file db, with the structure defined in the `schema.prisma` file

```sh
pnpm dlx prisma migrate dev --name boobs
```

1. Post this command add `dev.db*` to `.gitignore`, but since you are doing learning , this and the `.env` is not being added and will be committed to fuckr

2. When using prisma with nextjs, since hot reloading will continously try to make connections , a single file called `db.ts` is being created which will then be imported. In that file the code that is quries is decribed as a [`BEST PRACTICE HERE`](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution)

Code recommended here is

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

# Special Note

<details>

<summary>
Regarding Code/Spaces Size
</summary>

Fucking bastad shit bastard , fucking github fuckers bastard, never use 2gb ram bastard motherfucker shit fucker bastard die quickly rape them and nuke them all bastard !

</details>

# Dira

| HU  | LAL |
| :-: | :-: |
