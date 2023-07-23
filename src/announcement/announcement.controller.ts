import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Patch, Post } from '@nestjs/common';
import { AnnouncementEntity } from 'src/db/entities/announcement.entity';
import { AnnouncementService } from './announcement.service';
import { updateAnnouncementDto } from './dto/update-announcement.dto';


@Controller('announcement')
export class AnnouncementController {
    constructor(private announcementService: AnnouncementService) { }

    @Get()
    async getAllAnnouncements(): Promise<AnnouncementEntity[]> {
        return await this.announcementService.getAllAnnouncements();
    }

    @Post('inject')
    async injectToDB() {
        return await this.announcementService.injectToDB();
    }

    @Get(':id')
    async getAnnouncementsById(@Param('id') id: number): Promise<AnnouncementEntity> {
        const result = await this.announcementService.getAnnouncementsById(id);
        if (!result) throw new InternalServerErrorException('Something went wrong');
        return result;
    }
    @Delete(':id')
    async deleteAnnouncementById(@Param('id') id: number): Promise<void> {
        return await this.announcementService.deleteAnnouncementById(id);
    }

    @Patch(':id/update')
    async updateAnnouncement(@Param('id') id: number, @Body() updateAnnouncementDto: updateAnnouncementDto): Promise<AnnouncementEntity> {
        return await this.announcementService.updateAnnouncement(id, updateAnnouncementDto);
    }

    @Post('create')
    async CreateAnnouncement(@Body() announcement: AnnouncementEntity): Promise<{ data?: any, error?: { message: string } }> {
        const result = await this.announcementService.CreateAnnouncement(announcement);
        if (!result) throw new InternalServerErrorException('Something went wrong');
        return { data: result };

    }

}


