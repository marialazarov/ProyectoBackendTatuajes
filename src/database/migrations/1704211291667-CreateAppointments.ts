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
    
                  isNullable: true
                  
                },
                {
                    name: "artist_id",
                    type: "int",
                  
                    isNullable: true
                  },
      
                {
                  name: "date",
                  type: "varchar",
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
              foreignKeys: [
                {
                 columnNames: ["user_id"],
                 referencedTableName: "user",
                 referencedColumnNames: ["id"],
                 onDelete: "CASCADE",
                },
                {
                 columnNames: ["artist_id"],
                 referencedTableName: "artist",
                 referencedColumnNames: ["id"],
                 onDelete: "CASCADE",
                },
             ],
             }),
             true
          );
     }
 

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }

}
