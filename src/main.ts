import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors(); // Habilitar CORS si es necesario
  await app.init();
}

bootstrap();

// Exportar el servidor como una función compatible con Vercel
export const handler = server;
