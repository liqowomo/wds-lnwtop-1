<h1 align="center"><code> wo2 </code></h1>
<h3 align="center"><i> 2nd Attempt </i></h3>

---

1. [HUH ?](#huh-)
2. [Getting Server Consol prisma logs](#getting-server-consol-prisma-logs)

---

# HUH ?

This will contain important notes when doing this project

# Getting Server Consol prisma logs

1. To get this you have to include the following code into the `.ts` file whereever you put it

```ts
export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ['query', 'info', 'warn', 'error'],
	})
```
- This can be found - [`db.ts`](./src/db.ts)
- Before when you didnt include the `log` line , the following was not showing up in the server console 

```sh 
prisma:info Starting a sqlite pool with 5 connections.
prisma:query SELECT `main`.`Todo`.`id`, `main`.`Todo`.`title`, `main`.`Todo`.`Complete`, `main`.`Todo`.`createdAt`, `main`.`Todo`.`updatedAt` FROM `main`.`Todo` WHERE 1=1 LIMIT ? OFFSET ?
```
- Then you were trying to find out what was the problem 