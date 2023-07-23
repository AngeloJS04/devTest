import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { appConfig } from 'src/config';
import { AnnouncementEntity } from 'src/db/entities/announcement.entity';
import { Repository } from 'typeorm';
import { updateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementService {
    constructor(@InjectRepository(AnnouncementEntity) private readonly announcementRepository: Repository<AnnouncementEntity>) { }


    async getAllAnnouncements(): Promise<AnnouncementEntity[]> {
        return await this.announcementRepository.find();

    }

    async getAnnouncementsById(id: number): Promise<AnnouncementEntity> {
        const found = await this.announcementRepository.findOne({ where: { id } });
        if (!found) {
            throw new NotFoundException(`Announcement with ID "${id}" not found`);
        }
        return found;

    }

    async deleteAnnouncementById(id: number): Promise<void> {
        const result = await this.announcementRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Announcement with ID "${id}" not found`);
        }
    }

    async CreateAnnouncement(announcement: AnnouncementEntity): Promise<AnnouncementEntity> {
        const AnnouncementItem = this.announcementRepository.create(announcement);
        await this.announcementRepository.save(AnnouncementItem);
        return AnnouncementItem;
    }

    async updateAnnouncement(id: number, updateAnnouncementDto: Partial<updateAnnouncementDto>): Promise<AnnouncementEntity> {
        const announcement = await this.getAnnouncementsById(id);

        const combinedAnnouncement = { ...announcement, ...updateAnnouncementDto };
        await this.announcementRepository.save(combinedAnnouncement);

        return combinedAnnouncement;
    }

    async injectToDB() {
        await fetch(appConfig.AnnouncementAPI)
            .then(async (res: any) => {
                const announcements: AnnouncementEntity[] = await res.data;
                announcements.forEach(async (announcement) => {
                    const AnnouncementItem = this.announcementRepository.create(announcement);
                    await this.announcementRepository.save(AnnouncementItem);
                }
                )
            })
            .catch((err) => { console.log(err) })
    }
}


