import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './config/cors';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  
  const logger = new Logger('bootstrap');
  
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  //Habilitar CORS
  app.enableCors(CORS);

  //Seteamos el puerto como variable de entorno:
  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');

  //Configuracion SWAGGER (Documentacion):
  const config = new DocumentBuilder()
    .setTitle('Super-Market Documentacion')
    .setDescription('Descripcion del Backend')
    .setVersion('0.0')
    .addTag('Routes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

 
  //Seteamos el prefijo para todas lass rutas: API
  app.setGlobalPrefix('api');

  try {
    await app.listen(PORT);
    logger.log(`App listenting on port: ${PORT}`);
  } catch (error) {
    logger.error(`Error starting the app: ${error.message}`);
  }
}
bootstrap();
