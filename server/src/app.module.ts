import { Module } from '@danet/core';
import { TodoModule } from './todo/module.ts';
import { AppController } from './app.controller.ts';
import { ImageModule } from './image/image.module.ts';

@Module({
  controllers: [AppController],
  imports: [TodoModule, ImageModule],
})
export class AppModule { }
