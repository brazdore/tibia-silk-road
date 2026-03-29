import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tibia Silk Road API')
    .setDescription('API para consulta de items, NPCs e ofertas do Silk Road')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3001);
  Logger.log(`Running on http://localhost:3001`, 'Bootstrap');
  Logger.log(`Swagger on http://localhost:3001/docs`, 'Bootstrap');
}
bootstrap();
