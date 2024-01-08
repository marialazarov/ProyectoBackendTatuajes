import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateDesigns1704213639562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "designs",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
              
                {
                    name: "artist_id",
                    type: "int",
                    isPrimary: false,
                  },
      
            

                {
                  name: "style",
                  type: "varchar",
                  length:"40",

                },
                {
                    name: "pictures",
                    type: "varchar",
                    length:"40",
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
            "designs",
            new TableForeignKey({
                columnNames: ["artist_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "artists",
            })
        );
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("designs");
    }

}
