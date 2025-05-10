import { Repository } from '../database/repository.ts';
import { Inject, Injectable, Logger } from '@danet/core';
import { DATABASE } from '../database/module.ts'; // 
import { PostgresService } from '../database/postgres.service.ts';


@Injectable()
export class PostRepository implements Partial<Repository<any>> {
  constructor(@Inject(DATABASE) protected dbService: PostgresService) {
  }
  private logger = new Logger('PostRepository');

  // 전체 조회 
  async getAll(): Promise<any[]> {
    const { rows } = await this.dbService.client.queryObject<any>(
      `SELECT * FROM POST`
    );
    return rows;
  }

  // id를 통한 조회
  async getById(id: string) {
    const { rows } = await this.dbService.client.queryObject<any>(
      `SELECT id, title, content FROM POST WHERE id = '${id}'`
    );
    return rows[0];
  }

  // Create
  async create(post: any): Promise<any> {
    console.log(this.dbService.client, 'DB Client');

    this.logger.log(`Attempting to create a new post : ${post.slug}`);
    const insertQuery = `
      INSERT INTO POST (title, content, slug)
      VALUES ('${post.title}', '${post.content}', '${post.slug}')
      RETURNING id, title, content, slug;
    `;
    const { rows } = await this.dbService.client.queryObject<any>(insertQuery);
    console.log(rows);
    return rows[0];
  }
  // UpdateOne

  // Delete 
}