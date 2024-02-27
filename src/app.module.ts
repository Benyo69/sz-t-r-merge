import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as oldEntities from './old_db/entity';
import * as newEntities from './new_db/entity';
import { MigrationModule } from './migration.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => {
        return {
          type: 'mysql',
          port: parseInt(process.env.OLD_TYPEORM_PORT, 10),
          host: process.env.OLD_TYPEORM_HOST,
          username: process.env.OLD_TYPEORM_USERNAME,
          password: process.env.OLD_TYPEORM_PASSWORD,
          database: process.env.OLD_TYPEORM_DATABASE,
          migrationsTransactionMode: 'none',
          synchronize: true,
          entities: [
            oldEntities.Purchase,
            oldEntities.DictionaryUser,
            oldEntities.PushMessage,
            oldEntities.Statistic,
            oldEntities.UserActivity,
          ],
        };
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'secondaryDB',
      useFactory: async () => {
        return {
          type: 'mysql',
          port: parseInt(process.env.NEW_TYPEORM_PORT, 10),
          host: process.env.NEW_TYPEORM_HOST,
          username: process.env.NEW_TYPEORM_USERNAME,
          password: process.env.NEW_TYPEORM_PASSWORD,
          database: process.env.NEW_TYPEORM_DATABASE,
          migrationsTransactionMode: 'none',
          synchronize: true,
          entities: [
            newEntities.Purchase,
            newEntities.DictionaryUser,
            newEntities.PushMessage,
            newEntities.Statistic,
            newEntities.UserActivity,
          ],
        };
      },
    }),
    MigrationModule,
  ],
})
export class AppModule {}
