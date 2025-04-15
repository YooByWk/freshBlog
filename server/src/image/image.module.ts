import { DatabaseModule } from '../database/module.ts';
import { Module, TokenInjector } from '@danet/core';
import { ImageController } from './image.controller.ts';
import { ImageService } from './image.service.ts';
import { PostgresRepository } from '../todo/postgres-repository.ts';
import { IMAGE_REPOSITORY } from '../constant.ts';
import { ImageRepository } from './image.repository.ts';


@Module({
  controllers: [ImageController],
  injectables: [new TokenInjector(ImageRepository, IMAGE_REPOSITORY), ImageService],
  imports: [DatabaseModule]
})
export class ImageModule { }