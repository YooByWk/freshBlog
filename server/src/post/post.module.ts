import { DatabaseModule } from '../database/module.ts';
import { Module } from '@danet/core';
import { PostController } from './post.controller.ts';
import { PostService } from './post.service.ts';
import { POST_REPOSITORY } from '../constant.ts';
import { PostRepository } from './post.repository.ts';
import { PrismaModule } from '../prisma/prisma.module.ts';


@Module({
  controllers: [PostController],
  // injectables: [{ useClass: PostRepository, token: POST_REPOSITORY }, PostService],
  injectables: [PostService],
  // imports: [DatabaseModule]
  imports: [PrismaModule]
})
export class PostModule { }