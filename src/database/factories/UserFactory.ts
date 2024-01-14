import { faker } from "@faker-js/faker";
import { User } from "../../models/User";
import bcrypt from "bcrypt"
import { BaseFactory } from "./BaseFactory";

// -----------------------------------------------------------------------------

export class UserFactory extends BaseFactory<User>{
 protected generateSpecifics(user: User): User {
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

   


   

   return user
   }

   }


