import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, // 데코레이터 없으면 유효성 검사 스킵
    forbidNonWhitelisted: true, // 이상한 요소 거름
    transform: true, // 타입 자동변환
  }));
  await app.listen(3000);
}
bootstrap();
