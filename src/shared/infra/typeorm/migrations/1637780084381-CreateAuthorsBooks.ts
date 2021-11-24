import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAuthorsBooks1637780084381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authors_books",
                columns: [
                    {
                        name: "author_id",
                        type: "uuid",
                        isNullable: false,
                    },

                    {
                        name:"book_id",
                        type: "uuid",
                        isNullable: false,
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(
            "authors_books",
            new TableForeignKey({
                name: "FKAuthorBook",
                referencedTableName: "authors",
                referencedColumnNames: ["id"],
                columnNames: ["author_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        
        await queryRunner.createForeignKey(
            "authors_books",
            new TableForeignKey({
                name: "FKBookAuthor",
                referencedTableName: "books",
                referencedColumnNames: ["id"],
                columnNames: ["book_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "authors_books",
            "FKBookAuthor"
        );
        await queryRunner.dropForeignKey(
            "authors_books",
            "FKAuthorBook"
        );

        await queryRunner.dropTable("authors_books");
    }
}
