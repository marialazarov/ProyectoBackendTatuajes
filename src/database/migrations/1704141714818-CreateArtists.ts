import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateArtists1704141714818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "artists",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "user_id",
                  type: "int",
                  isPrimary: false,
                },
      
                {
                  name: "name",
                  type: "varchar",
                  length: "40",
                  isUnique: true,
                },

                {
                  name: "surname",
                  type: "varchar",
                  length: "40",
                },
      
             
                {
                  name: "portfolio",
                  type: "varchar",
                  length: "100",
                  isNullable: true
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
            "artists",
            new TableForeignKey({
              columnNames: ["user_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "users",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("artists");
    }

}
