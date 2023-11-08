// database.module.ts
import { Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule here
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        //uri: 'mongodb://localhost:27017/medicalres',
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false,
      }),
      inject: [ConfigService], // Inject ConfigService here
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]): any {
    return MongooseModule.forFeature(models);
  }
}

