import { Body, Controller, Get, Inject, Injectable, Logger, Param, Post, Query } from '@danet/core';
import { PostService } from './post.service.ts';


@Controller('post')
export class PostController {
  constructor(
    public postService: PostService
  ) { }
  private logger = new Logger('PostController');
  // create
  @Post() // post 생성 객체 + 이미지 id 배열
  // async create(@Body() post: any, @Body() imgIds: (number | string)[]) {
  async create(@Body('post') post: any, @Body("imgIds") imgIds: (number | string)[]) {
    console.log(post.title, imgIds);
    console.log(123123);
    return await this.postService.create(post, imgIds);
  }

  // Get ALL
  // 추후 페이지네이션
  @Get()
  async getAll(@Query('search') search?: string) {
    return await this.postService.getAll(search);
  }

  @Get('detail/:slug')
  async getBySlug(@Param('slug') slug: string) {

    const post = await this.postService.getBySlug(slug);
    this.logger.log(`${post.title} : Get By Slug `);
    return post;
  }

} 