import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  providers: [UtilsService],
  exports: [UtilsService],
  imports: [DatabaseModule, ConfigModule, LoggerModule],
})
export class UtilsModule {}
