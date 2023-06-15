import {PrismaClient} from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// This coding pattern is instantiating a single instance, which ensures that multiple instances are not being spun up during the HMR prpocess (which nextjs 13 does in the dev phase in your case when you run - pnpm run dev ---turbo - using the turbo pak)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
