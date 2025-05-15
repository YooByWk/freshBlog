import { HttpException, Inject, Injectable, Logger } from '@danet/core';
import { IMAGE_REPOSITORY } from '../constant.ts';
import { ImageRepository } from './image.repository.ts';
import { ensureDir } from 'jsr:@std/fs@1.0.4';
import type { Repository } from '../database/repository.ts';
import { PrismaService } from '../prisma/prisma.service.ts';

import { PrismaClient } from "../generated/prisma/index.js";
import { PRISMA } from '../prisma/prisma.module.ts';
import type { PrismaClient as TPrismaClient } from '../generated/prisma/index.d.ts';


const prisma = new PrismaClient();
const domain = Deno.env.get("DOMAIN") || "localhost";
@Injectable()
export class ImageService {
  // constructor(@Inject(IMAGE_REPOSITORY) private repository: Repository<any>) { }
  // constructor(@Inject(IMAGE_REPOSITORY) private readonly repository: ImageRepository) { }
  // constructor(private readonly repository: PrismaService) { }
  // constructor()
  constructor(@Inject(PRISMA) private repository: TPrismaClient) { }

  private cnt = 0;
  private logger = new Logger('ImageService');
  private uploadPath = Deno.cwd() + '/uploads/';
  getAll() {
    // console.log(this.repository.getAll(), 'API Test');
    // return this.repository.getAll();
  }

  // nginx에서 처리할거임.
  // async getOneImageByFileName(slug: string, fileName: string) {
  //   const dir = this.uploadPath + slug;
  //   const filePath = dir + '/' + fileName;
  //   let fileBytes;
  //   try {
  //     fileBytes = await Deno.readFile(filePath);
  //     const contentType = `image/${fileName.split('.').pop()?.toLowerCase()}`;
  //     this.logger.log(`파일 읽기 성공 : ${filePath}`);
  //     return new Response(fileBytes, {
  //       // headers: { 'Content-Type': contentType }
  //       headers: { 'Content-Type': 'image/png' }
  //     });
  //   } catch {
  //     this.logger.error(`파일을 찾을 수 없습니다. ${filePath}`);
  //   }
  // }

  // filename, path, url 전달해야 함. 추후 Class화
  async create(imageFile: File, title: string, slug: string) {
    this.cnt++; // 그냥 업타임 업로드 개수 확인
    this.logger.log(`imageFile | 누적 카운트 : ${this.cnt} | title`);

    try {

      // 0. 폴더 확인 & 생성
      const dir = this.uploadPath + slug;

      await ensureDir(dir);
      // 1. 파일 저장을 위해 우선 filename 생성
      const imageFileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      // 2. 파일 저장 경로 + 파일 저장
      const bytes = await imageFile.arrayBuffer();
      const fileType = imageFile.type.split('/')[1];
      const filePath = dir + '/' + imageFileName + '.' + fileType;

      await Deno.writeFile(filePath, new Uint8Array(bytes));
      this.logger.log(`파일 저장 완료 : ${dir + '/' + imageFileName}`);

      const URL = domain === 'localhost' ? 'http://localhost:3000' : `https://${domain}`;
      console.log(URL);
      // 3. 저장된 경로를 전달 후 Db에 저장
      const repoObj = {
        fileName: imageFileName,
        path: filePath,
        // url: `http://${domain}/image/${slug}/${imageFileName}.${fileType}`,
        url: `${URL}/image/${slug}/${imageFileName}.${fileType}`,
      };
      const result = await this.repository.image.create({
        data: repoObj
      });
      // const result = await this.repository.create(repoObj);
      return result;
    } catch (err) {
      this.logger.error(`업로드 실패 : ${err}`);
    }
  }

}