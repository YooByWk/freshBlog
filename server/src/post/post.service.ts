import { Inject, Injectable, Logger } from '@danet/core';

import { PrismaClient } from "../generated/prisma/index.js";
import type { Post, Prisma, PrismaClient as TPrismaClient } from '../generated/prisma/index.d.ts';
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
          summary: post.summary,
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

  // 모든 Post 조회해오기
  async getAll(search?: string) {

    const findManyOptions: Prisma.PostFindManyArgs = {};

    if (search && search.trim() !== '') {
      findManyOptions.where = {
        OR: [
          {
            title: {
              contains: search.trim(), // 검색어 앞뒤 공백 제거
              mode: 'insensitive'
            }
          },
          {
            content: {
              contains: search.trim(), // 검색어 앞뒤 공백 제거
              mode: 'insensitive'
            }
          }
        ]
      };
    }

    const posts = await this.repository.post.findMany(findManyOptions);
    return posts;
  }

  // getBySlug
  async getBySlug(slug: string) {
    const post = await this.repository.post.findUnique({
      where: {
        slug
      },
      include: { images: true }
    });
    return post;
  }
  // 삭제하며 이미지도 물리적 제거할까...?
  async deleteBySlug(slug: string) {
    const post = await this.repository.post.findUnique({
      where: {
        slug
      },
      include: { images: true }
    });
    if (post) {
      await this.repository.image.deleteMany({
        where: {
          post_id: post.id
        }
      });

      const deletedPost = await this.repository.post.delete({
        where: {
          slug
        }
      });
      return deletedPost;
    } else {
      throw new Error('Post not found');
    }
  }
  //
}