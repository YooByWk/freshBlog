import { Inject, Injectable, Logger } from '@danet/core';
import { PostRepository } from './post.repository.ts';
import { POST_REPOSITORY } from '../constant.ts';
import type { Repository } from '../database/repository.ts';
import { PrismaService } from '../prisma/prisma.service.ts';

import { PrismaClient } from "../generated/prisma/index.js";
import type { PrismaClient as TPrismaClient } from '../generated/prisma/index.d.ts';
import { PRISMA } from '../prisma/prisma.module.ts';


const prisma: TPrismaClient = new PrismaClient();
@Injectable()
export class PostService {
  // constructor(@Inject(POST_REPOSITORY) private repository: Repository<any>) { }
  // constructor(@Inject(POST_REPOSITORY) private repository: PostRepository) { }
  constructor(@Inject(PRISMA) private repository: TPrismaClient) { }
  private cnt = 0;
  private logger = new Logger('PostService');
  // 전체 조회


  // id를 통한 조회

  // create
  async create(post, imgIds: (number | string)[]) {
    this.logger.log(`${this.cnt} attempts at this run  :  create a new post : ${post.slug},`);
    this.cnt++;
    console.log(post.title);
    const imagesToConnect = imgIds.map(id => ({ id: Number(id) })); // 배열 처리 .
    // 일단 생성
    try {
      // const createdPost = await prisma.post.create({
      const createdPost = await this.repository.post.create({
        data: {
          title: post.title,
          content: post.content,
          slug: post.slug,
          ...(imagesToConnect.length > 0 && {
            images: {
              connect: imagesToConnect
            }
          })
        },
        include: { images: true }
      });
      // const createdPost = await this.repository.create(post);
      console.log(createdPost, imgIds);
      return createdPost;
    } catch (err) {
      this.logger.error(`생성 중 에러 발생 : ${err}`);
    }
    // post 생성되면 해당 값을 이용해서 이미지 업데이트
  }

  //

  //

  //
}