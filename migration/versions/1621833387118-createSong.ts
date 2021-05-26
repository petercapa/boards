import {MigrationInterface, QueryRunner, Table, Transaction} from "typeorm";

export class createSong1621833387118 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "song",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    }
                ]
            }), true)
        } catch(e) {
            console.log("hi2")
            
            throw new Error('error !!!!')
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable("song", true, true);
        } catch (e) {
            throw new Error(e)
        }
    }
}
