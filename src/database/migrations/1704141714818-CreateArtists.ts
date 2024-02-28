import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateArtists1704141714818 implements MigrationInterface {
    static appointments: any;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "artist",
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
                  isPrimary: true,
                },
      
                {
                  name: "name",
                  type: "varchar",
                  length: "40",
                 
                },

           
             
                {
                  name: "portfolio",
                  type: "varchar",
                  length: "100",
                  
                },
             
                {
                  name: "img",
                  type: "varchar",
                  length: "100",
                  
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
             onDelete: "CASCADE", // when user is deleted, artist related to this
            },
         ],
         }),
         true
      );
 }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("artist");
    }

}
