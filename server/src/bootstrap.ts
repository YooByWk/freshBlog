import '@std/dotenv/load';
import { AppModule } from './app.module.ts';
import { DanetApplication } from '@danet/core';
import { loggerMiddleware } from './logger.middleware.ts';
import { SpecBuilder, SwaggerModule } from '@danet/swagger';
import { ImageModule } from './image/image.module.ts';
export const bootstrap = async () => {
  const application = new DanetApplication();
  application.enableCors();
  application.registerBasePath('api');
  await application.init(AppModule);
  // await a
  const spec = new SpecBuilder()
    .setTitle('Todo')
    .setDescription('The todo API')
    .setVersion('1.0')
    .build();
  // const document = await SwaggerModule.createDocument(application, spec);
  // await SwaggerModule.setup('api', application, document);
  application.addGlobalMiddlewares(loggerMiddleware);
  console.log(Deno.env.get("DOMAIN"));
  return application;
};
