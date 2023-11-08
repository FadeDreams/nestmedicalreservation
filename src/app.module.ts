import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { DatabaseModule } from '../libs/utils/src/database/database.module';
import { DatabaseModule } from 'libs/utils/src/database/database.module';
import { ConfigModule } from '@nestjs/config';
//import { DatabaseModule } from '@app/utils';


@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
