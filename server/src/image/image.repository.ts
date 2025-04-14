import { Inject } from '@danet/core';
import { DATABASE } from '../database/module.ts';
import { PostgresService } from '../database/postgres.service.ts';
import { Repository } from '../database/repository.ts';

// any는 작성 후 Image 로 변경하자.
export class ImageRepository implements Partial<Repository<any>> {
  constructor(@Inject(DATABASE) private dbService: PostgresService) { }

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
    const { rows } = await this.dbService.client.queryObject<any>(
      `INSERT INTO IMAGE (filename, path, url)
       VALUES ('${image.filename}', '${image.path}', '${image.url}')
       RETURNING id, filename, path, url;
      )`
    );
    return rows[0];
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