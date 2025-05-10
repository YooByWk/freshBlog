import { Repository } from '../database/repository.ts';
import { Inject, Injectable, Logger } from '@danet/core';
import { DATABASE } from '../database/module.ts';
import { PostgresService } from '../database/postgres.service.ts';

// any는 작성 후 Image 로 변경하자.
@Injectable()
export class ImageRepository implements Partial<Repository<any>> {
  constructor(@Inject(DATABASE) protected dbService: PostgresService) { }

  private logger = new Logger('ImageRepository');

  async getAll(): Promise<any[]> {
    const { rows } = await this.dbService.client.queryObject<any>(
      `SELECT * FROM IMAGE`
    );
    return rows;
  };

  async getByPaths(paths: string[]): Promise<any> {
    const { rows } = await this.dbService.client.queryObject<any>(
      `SELECT * FROM IMAGE WHERE path IN (${paths.map((path) => `'${path}'`).join(', ')})`
    );
    return rows;
  }

  // 이게 필요할지는 모르겠음. 
  async getById(id: string) {
    const { rows } = await this.dbService.client.queryObject<any>(
      `SELECT id, filename, path, url FROM IMAGE WHERE id = '${id}'`
    );
    return rows[0];
  };

  // 할일: 수정 후 Omit<Image, 'id'> 로 변경해야 함.
  async create(image: any): Promise<any> {
    // console.log('호출', image);
    try {
      console.log(this.dbService.client, 'DB Client');
      const { rows } = await this.dbService.queryObject(
        `INSERT INTO IMAGE (filename, path, url)
       VALUES ('${image.filename}', '${image.path}', '${image.url}')
       RETURNING id, filename, path, url;`

      );
      // this.logger.log(`ImageRepository.create() | ${rows[0].id} | ${image.filename} | ${image.path} | ${image.url}`);
      return rows[0];
    } catch (err) {
      console.log(err);
    }

  };

  async deleteOne(imageId: string) {
    return this.dbService.client.queryObject<any>(
      `DELETE FROM IMAGE WHERE id = '${imageId}'; `
    );
  };

  // 메모: 이게 필요할지는 모르겠음. 
  async deleteAll() {
    return this.dbService.client.queryObject<any>(`DELETE FROM IMAGE`);
  };

} // class ends here 