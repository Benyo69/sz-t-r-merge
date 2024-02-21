import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DictionaryUser,
  Purchase,
  PushMessage,
  Statistic,
  UserActivity,
} from './old_db/entity';
import {
  DictionaryUser as DC,
  Purchase as PR,
  PushMessage as PM,
  Statistic as Stat,
  UserActivity as UA,
} from './new_db/entity';
import {
  DictionaryUser as TestDC,
  Purchase as TestPR,
  PushMessage as TestPM,
  Statistic as TestStat,
  UserActivity as TestUA,
} from './test_db';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Purchase,
      DictionaryUser,
      PushMessage,
      Statistic,
      UserActivity,
    ]),
    TypeOrmModule.forFeature([PR, DC, PM, Stat, UA], 'secondaryDB'),
    TypeOrmModule.forFeature(
      [TestDC, TestPR, TestPM, TestStat, TestUA],
      'thirdDB',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class MigrationModule {}
