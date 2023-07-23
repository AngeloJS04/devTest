import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementEntity } from 'src/db/entities/announcement.entity';
import { AnnouncementController } from './announcement.controller';
import { AnnouncementService } from './announcement.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnnouncementEntity])],
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
  exports: [AnnouncementService]
})
export class AnnouncementModule {}
