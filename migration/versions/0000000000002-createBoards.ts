import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBoard0000000000002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "boards",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "contents",
                        type: "varchar",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "users_id",
                        type: "int",
                        isUnique: true
                    },
                    {
                        name: "created_at",
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },
                    {
                        name: "updated_at",
                        type: 'timestamp',
                        isNullable: true
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
                        columnNames: ["users_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    }
                ]
            }), true)
    
            await queryRunner.createTable(new Table({
                name: "board_images",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: "increment"
                    },
                    {
                        name: "url",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },
                    {
                        name: "updated_at",
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: "boards_id",
                        type: "int",
                        isUnique: true
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
                    }
                ]
            }), true)
        } catch (e) {
            throw new Error(e)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable("board_images", true, true);
            await queryRunner.dropTable("boards");
        } catch (e) {
            throw new Error(e)
        }
    }
}
