import { PrismaClient } from "../generated/prisma/index.js";
import type { PrismaClient as TPrismaClient } from '../generated/prisma/index.d.ts';

export const prismaClientInstance: TPrismaClient = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL')
    }
  }
});
