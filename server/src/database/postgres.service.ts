import { Injectable } from '@danet/core';
import { OnAppBootstrap, OnAppClose } from '@danet/core/hook';
import { Client, QueryObjectResult } from '@bartlomieju/postgres';

@Injectable()
export class PostgresService implements OnAppBootstrap, OnAppClose {
  constructor() { }

  public client!: Client;

  async onAppBootstrap() {
    this.client = new Client({
      user: Deno.env.get('DB_USERNAME'),
      password: Deno.env.get('DB_PASSWORD'),
      database: Deno.env.get('DB_NAME'),
      hostname: Deno.env.get('DB_HOST'),
    });
    await this.client.connect();
    await this.client.queryObject(
      `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
      CREATE TABLE IF NOT EXISTS todo (
        _id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR NOT NULL,
        content TEXT
      );`,
    );
    // Post 테이블
    await this.client.queryObject(`
        CREATE TABLE IF NOT EXISTS post (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          slug TEXT NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
        `).then(() => { console.log('포스트: 이미 있거나, 생성함'); });
    // 이미지 테이블 생성
    await this.client.queryObject(`
      CREATE TABLE IF NOT EXISTS image (
        id SERIAL PRIMARY KEY,
        filename TEXT NOT NULL,
        path TEXT NOT NULL,
        url TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        post_id INTEGER,
        CONSTRAINT fk_image_post
          FOREIGN KEY(post_id)
          REFERENCES post(id)
      );
      `).then(() => console.log('이미지: 이미 있거나, 생성함'));
  }

  async onAppClose() {
    await this.client.end();
  }

  public async queryObject<T>(query: string, args?: any[]): Promise<QueryObjectResult<T>> {
    console.log('[PostgresService] queryObject: Called.', { clientExists: !!this.client, query: query.substring(0, 50) + '...' }); // 메소드 시작 로그, client 상태 확인
    // 클라이언트가 초기화되었는지 확인 (이론적으로는 불필요하지만 디버그에 유용)
    if (!this.client) {
      // 만약 이 에러가 발생한다면, onAppBootstrap이 제대로 완료되지 않았거나
      // this.client 할당에 문제가 있었음을 의미
      const initError = new Error('Database client is NOT initialized when queryObject was called.');
      console.error('[PostgresService] queryObject: Usage Error:', initError.message, { query, args });
      throw initError; // 오류를 던져서 문제 상황을 알립니다.
    }


    try {
      // 실제 쿼리 실행
      const result = await this.client.queryObject<T>(query, args);
      console.log('[PostgresService] queryObject: Query executed successfully.', { query: query.substring(0, 50) + '...' });
      return result;
    } catch (error) {
      console.error('[PostgresService] queryObject: Query failed:', { query, args, error });
      throw error; // 에러를 다시 던짐
    }
  }
}
