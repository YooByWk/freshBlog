import { Body, Controller, Inject, Injectable, Post } from '@danet/core';
import { PostService } from './post.service.ts';


@Controller('post')
export class PostController {
  constructor(
    public postService: PostService
  ) { }

  // create
  @Post() // post 생성 객체 + 이미지 id 배열
  // async create(@Body() post: any, @Body() imgIds: (number | string)[]) {
  async create(@Body('post') post: any, @Body("imgIds") imgIds: (number | string)[]) {
    console.log(post.title, imgIds);
    console.log(123123);
    return await this.postService.create(post, imgIds);

  }

  // Get ALL

} 