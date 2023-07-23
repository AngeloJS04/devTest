import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Generated,CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer'
import { IsOptional } from 'class-validator';

@Entity({ name: 'announcement', schema: "public" })

export class AnnouncementEntity {
    @Exclude({ toPlainOnly: true })
    @PrimaryGeneratedColumn()
   @IsOptional()
    id: number;

    @Generated('uuid')
    @Column('uuid')
    uuid: string

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'varchar', length: 255 })
    link: string;

    @Column()
    content: string;

    @Column({ type: 'timestamp' })
    date: Date;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date

    @Exclude({ toPlainOnly: true })
    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date

    @Exclude({ toPlainOnly: true })
    @DeleteDateColumn({ type: 'timestamptz' })
    deletedAt: Date
}