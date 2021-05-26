import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addNicknameToUsers1621936046576 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.addColumn('users', new TableColumn({
                name: "nickname",
                type: "varchar",
                isUnique: true,
                isNullable: false
            }))
        } catch (e) {
            throw new Error(e)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropColumn('users', 'nickname')
        } catch (e) {
            throw new Error(e)
        }
    }
}
