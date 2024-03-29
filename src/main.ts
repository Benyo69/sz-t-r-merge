import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appService = app.get(AppService);

  console.log('migration started');
  await appService.migration();

  console.log('migration completed');

  await app.listen(3000);
}
bootstrap();
