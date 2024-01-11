import { faker } from "@faker-js/faker";
import { User } from "../../models/User";
import bcrypt from "bcrypt"

// -----------------------------------------------------------------------------

export class UserFactory {
   private static generate() {
      const user = new User();
      user.username = faker.internet.userName();
      user.password_hash = bcrypt.hashSync("12345678",10)
      user.email =faker.internet.email({
         
         allowSpecialCharacters: true
         
         });
      user.name = faker.person.firstName();
      user.surname = faker.person.lastName();
      user.phone = faker.phone.number();
      user.createdAt = new Date ();
      user.updatedAt = new Date ();

      
    

      return user;
   }

   static createMany(count = 1) {
      const generated=[];

      for (let i=0 ; i < count; i++){
      const item = this.generate();
      generated.push(item);
   }
   return generated;
}
}
