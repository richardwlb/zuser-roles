import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1612620163221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'user_name',
              type: 'varchar',
            },
            {
              name: 'name',
              type: 'varchar',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
