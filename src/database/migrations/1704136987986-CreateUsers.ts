import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateUsers1704136987986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "role_id",
            type: "int",
            isPrimary: false,
          },

          {
            name: "username",
            type: "varchar",
            length: "40",
            isUnique: true,
          },
          {
            name: "name",
            type: "varchar",
            length: "40",
          },
          {
            name: "surname",
            type: "varchar",
            length: "40",
          },

          {
            name: "password",
            type: "varchar",
            length: "255",
          },

          {
            name: "email",
            type: "varchar",
            length: "100",
          },
          {
            name: "phone",
            type: "varchar",
            length: "255",
            isUnique: true,
          },

          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            isNullable: false,
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
            isNullable: false,
          },
        ],
      }),
      true
    );
    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["role_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "roles",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
function down(queryRunner: any, QueryRunner: any) {
  throw new Error("Function not implemented.");
}
