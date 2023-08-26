import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.enableCors({
    origin: 'https://codeverse-front.vercel.app/',
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders: 'Content-Type, Accept',
    exposedHeaders: 'Custom-Header',
    optionsSuccessStatus: 204,
    preflightContinue: false,
    credentials: true
  });
  await app.listen(3000);
}
bootstrap();
