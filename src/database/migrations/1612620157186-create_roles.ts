import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRoles1612620157186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'roles',
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
              name: 'role_name',
              type: 'varchar',
            },
            {
              name: 'tcode',
              type: 'varchar',
            },
            {
              name: 'functions',
              type: 'varchar',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('roles');
    }

}
