import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createComments0000000000003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "comments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "contents",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "users_id",
                        type: "int",
                        isUnique: true
                    },
                    {
                        name: "comments_id",
                        type: "int",
                        isUnique: true
                    },
                    {
                        name: "boards_id",
                        type: "int",
                        isUnique: true
                    },
                    {
                        name: "updated_at",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "created_at",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "is_deleted",
                        type: 'tinyint',
                        default: 0,
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["boards_id"],
                        referencedTableName: "boards",
                        referencedColumnNames: ["id"]
                    },
                    {
                        columnNames: ["users_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        columnNames: ["comments_id"],
                        referencedTableName: "comments",
                        referencedColumnNames: ["id"]
                    }
                ]
            }), true)
        } catch (e) {
            throw new Error(e)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable("comments", true, true);
        } catch (e) {
            throw new Error(e)
        }
    }

}
