import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Context, Res } from '@danet/core';
import { ImageService } from './image.service.ts';
import type { HttpContext } from '@danet/core';


@Controller('image')
export class ImageController {
  constructor(public imageService: ImageService) { }

  @Get()
  async getAll() {
    return { 1: 3 };
    // return this.imageService.getAll();
  }


  // // @Get(:slug)
  // @Get('i/:slug/:filename')
  // async getOneImageByFileName(@Param('slug') slug: string, @Param('filename',) filename: string) {
  //   const serviceRes = await this.imageService.getOneImageByFileName(slug, filename);
  //   console.log(await serviceRes);
  //   // return res;
  //   return new Response("33", {
  //     headers: { 'Content-Type': 'image/png' }
  //   });
  // }

  // formData를 받아야 함, 
  @Post()
  async create(@Context() ctx: HttpContext) {
    const formData = await ctx.req.formData();
    const title = formData.get('title') as string;
    const imageFile = formData.get('image') as File;
    const slug = formData.get('slug') as string;
    // console.log(await ctx.req.formData(), 'ctx.body');
    // const url = "https://i.namu.wiki/i/st2imdxbF4I4niKCHUVXzhQMmgXTd506kRYG0n6Yq90rCuVfki6MXVhUZCDtEXmhAV8eTUDtFaLSdKqJOZkSB9rfDdcoYKp_TOaRGXZy4hNjYwXcnNkKsyUfcAzLQkIcHVxqV4fiC-DrYNIXbuckYQ.webp";
    // return { url };
    return this.imageService.create(imageFile, title, slug);
  }
} // end of ImageController 