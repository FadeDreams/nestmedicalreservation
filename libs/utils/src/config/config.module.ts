import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [NestConfigModule.forRoot({})],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule { }
