import { bootstrap } from './src/bootstrap.ts';

const application = await bootstrap();
console.log('Server is running maybe');
await application.listen(Number(Deno.env.get('PORT') || 3000));
