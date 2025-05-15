import { Module } from '@danet/core';
import { PrismaModule } from '../prisma/prisma.module.ts';
import { AuthController } from './auth.controller.ts';
import { AuthService } from './auth.service.ts';
import { SimpleAuthGuard } from './SimpleAuthGuard.guard.ts';


export const SIMPLE_GUARD = "SIMPLE_GUARD";

@Module({
  controllers: [AuthController],
  injectables: [AuthService, { useValue: SimpleAuthGuard, token: SIMPLE_GUARD }],
  imports: [PrismaModule]
})
export class AuthModule { }