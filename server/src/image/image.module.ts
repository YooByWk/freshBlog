import { DatabaseModule } from '../database/module.ts';
import { Module, TokenInjector } from '@danet/core';
import { ImageController } from './image.controller.ts';


@Module({
  controllers: [ImageController],
  injectables: [],
  imports: [DatabaseModule]
})
export class ImageModule { }