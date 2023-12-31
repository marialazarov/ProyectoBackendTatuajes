import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1701807025522 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      //
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
                  name: "username",
                  type: "varchar",
                  length: "40",
                  isUnique: true,
               },
               {
                  name: "first_name",
                  type: "varchar",
                  length: "255",
               },
               {
                  name: "last_name",
                  type: "varchar",
                  length: "255",
               },
               {
                  name: "email",
                  type: "varchar",
                  length: "255",
                  isUnique: true,
               },
            ],
         }),
         true
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
   }
}
