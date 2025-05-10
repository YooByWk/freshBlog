import { Module, } from '@danet/core';
import { PostgresService } from "./postgres.service.ts";

export const DATABASE = 'DATABASE';

@Module({
  imports: [],
  injectables: [{ useClass: PostgresService, token: DATABASE }], // change PostgresService by any service using other database engine if needed.
})
export class DatabaseModule { }
