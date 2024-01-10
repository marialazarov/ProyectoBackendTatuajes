import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateAppointments1704211291667 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "appointments",
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
                    name: "artist_id",
                    type: "int",
                    isPrimary: false,
                  },
      
                {
                  name: "date",
                  type: "date",
                  isUnique: true,
                },

                {
                  name: "hour",
                  type: "varchar",
                  length:"20",
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
            "appointments",
            new TableForeignKey({
              columnNames: ["user_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "user",
            })
          );
          await queryRunner.createForeignKey(
            "appointments",
            new TableForeignKey({
                columnNames: ["artist_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "artist",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }

}
