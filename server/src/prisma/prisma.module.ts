import { Module } from '@danet/core';
import { PrismaService } from './prisma.service.ts';
import { prismaClientInstance } from './prisma.instance.ts';

export const PRISMA = 'PRISMA_CLIENT';

@Module({
  // injectables: [PrismaService],
  injectables: [PrismaService, { useValue: prismaClientInstance, token: PRISMA }],
})
export class PrismaModule { }