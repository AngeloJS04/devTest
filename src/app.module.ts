import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementModule } from './announcement/announcement.module';
import { configSchema } from './config.schema';
import { appDataSourceOptions } from './db';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configSchema
    }),
    TypeOrmModule.forRoot(appDataSourceOptions),
    AnnouncementModule,
    
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
