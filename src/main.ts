import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: 'Content-Type, Accept',
    exposedHeaders: 'Custom-Header',
    credentials: false
  });
  await app.listen(3000);
}
bootstrap();
