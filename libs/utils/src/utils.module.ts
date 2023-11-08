import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  providers: [UtilsService],
  exports: [UtilsService],
  imports: [DatabaseModule, ConfigModule],
})
export class UtilsModule {}
