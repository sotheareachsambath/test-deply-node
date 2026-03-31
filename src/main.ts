import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Test Deploy Node API')
    .setDescription('API docs for Test Deploy Node')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = Number(process.env.PORT ?? 8084);
  await app.listen(port);
  logger.log(`Application is running on http://localhost:${port}`);
  logger.log(`Swagger available at http://localhost:${port}/api`);
}

void bootstrap();
