import { DatabaseModule } from '../database/module.ts';
import { Module } from '@danet/core';
import { ImageController } from './image.controller.ts';
import { ImageService } from './image.service.ts';
import { IMAGE_REPOSITORY } from '../constant.ts';
import { ImageRepository } from './image.repository.ts';
import { PrismaModule } from '../prisma/prisma.module.ts';


@Module({
  controllers: [ImageController],
  // injectables: [{ useClass: ImageRepository, token: IMAGE_REPOSITORY }, ImageService],
  injectables: [ImageService],
  // injectables: [ImageService, ImageRepository],
  // imports: [DatabaseModule],
  imports: [PrismaModule],

})
export class ImageModule { }