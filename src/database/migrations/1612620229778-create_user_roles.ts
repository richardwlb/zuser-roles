import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserRoles1612620229778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'user_roles',
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
              name: 'id_user',
              type: 'integer',
            },
            {
              name: 'id_role',
              type: 'integer',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('user_roles');
    }

}
