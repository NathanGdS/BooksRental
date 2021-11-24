import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAuthors1637757484391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authors",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },

                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },

                    {
                        name: "nationality",
                        type: "varchar",
                        isNullable: false,
                    },

                    {
                        name: "age",
                        type: "int",
                        isNullable: false,
                    },

                    {
                        name:"alive",
                        type: "boolean",
                        default: true,
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("authors");
    }

}
