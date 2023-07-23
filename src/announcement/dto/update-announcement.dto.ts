import { IsString } from "class-validator";


export class updateAnnouncementDto {
    @IsString()
    title: string;

    @IsString()
    link: string;

    @IsString()
    content: string;
}