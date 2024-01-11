import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersRoles1704837126641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "user_role",
               columns: [
                  {
                     name: "user_id",
                     type: "int",
                     isPrimary: true,
                  },
                  {
                     name: "role_id",
                     type: "int",
                     isPrimary: true,
                  },
               ],
               foreignKeys: [
                  {
                     columnNames: ["user_id"],
                     referencedTableName: "user",
                     referencedColumnNames: ["id"],
                  },
                  {
                     columnNames: ["role_id"],
                     referencedTableName: "role",
                     referencedColumnNames: ["id"],
                  },
               ],
            }),
            true
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_role");
    }

}
