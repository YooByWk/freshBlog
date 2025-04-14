import { Injectable } from '@danet/core';
import { OnAppBootstrap, OnAppClose } from '@danet/core/hook';
import { Client } from '@bartlomieju/postgres';

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
    try {
      // 이미지 테이블 생성
      await this.client.queryObject(`
      CREATE TABLE IF NOT EXISTS image (
        id SERIAL PRIMARY KEY,
        filename TEXT NOT NULL,
        path TEXT NOT NULL,
        url TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      `).then(() => console.log('이미지: 이미 있거나, 생성함'));
        // Post 테이블
      await this.client.queryObject(`
        CREATE TABLE IF NOT EXISTS post (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
        `).then(() => { console.log('포스트: 이미 있거나, 생성함'); });
    }
    catch (error) {
      console.error('Error creating images table:', error);
    }
  }

  async onAppClose() {
    await this.client.end();
  }
}
