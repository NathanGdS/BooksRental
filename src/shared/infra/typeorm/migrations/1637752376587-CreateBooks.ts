import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooks1637752376587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"books",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true,
                    },

                    {
                        name: "title",
                        type: "varchar",
                        isNullable: false,
                    },

                    {
                        name: "description",
                        type: "varchar",
                    },

                    {
                        name: "release_date",
                        type: "timestamp",
                        isNullable: false,
                        default: "now()",
                    },

                    {
                        name: "genre_id",
                        type: "uuid",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKGenre",
                        referencedTableName: "genres",
                        referencedColumnNames: ["id"],
                        columnNames: ["genre_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
