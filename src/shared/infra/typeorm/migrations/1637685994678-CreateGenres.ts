import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGenres1637685994678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"genres",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name:"description",
                        type:"varchar",
                        isNullable: false,
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("genres");
    }

}
