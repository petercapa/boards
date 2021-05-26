import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers0000000000001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log(queryRunner.isTransactionActive)
        try {
            await queryRunner.createTable(new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: "increment"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isPrimary: true,
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
                        name: "is_deleted",
                        type: 'tinyint',
                        default: 0,
                        isNullable: false
                    }
                ]
            }), true)
    
            await queryRunner.createTable(new Table({
                name: "user_images",
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
                        name: "users_id",
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
                        columnNames: ["users_id"],
                        referencedTableName: "users",
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
            await queryRunner.dropTable("user_images", true, true);
            await queryRunner.dropTable("users", true);
        } catch (e) {
            throw new Error(e)
        }
    }

}
