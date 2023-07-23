import { MigrationInterface, QueryRunner } from "typeorm";

export class AnnoucementMigration1690044847316 implements MigrationInterface {
    name = 'Annoucement.migration1690044847316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "uuid"`);
    }

}
