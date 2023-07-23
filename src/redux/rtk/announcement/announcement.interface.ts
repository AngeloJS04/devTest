export interface Announcement {
    id: number;
    title: string;
    link: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    date: string;
    uuid: string;

}
export interface IResponseAnnouncement {
    data: Announcement[];
}