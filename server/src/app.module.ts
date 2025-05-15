import { Module } from '@danet/core';
import { TodoModule } from './todo/module.ts';
import { AppController } from './app.controller.ts';
import { ImageModule } from './image/image.module.ts';
import { PostModule } from './post/post.module.ts';
import { AuthModule } from './auth/auth.module.ts';

@Module({
  controllers: [AppController],
  // imports: [ImageModule, PostModule],
  imports: [ImageModule, PostModule, AuthModule],
})
export class AppModule { }

