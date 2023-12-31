import { faker } from "@faker-js/faker";
import { User } from "../../models/User";

// -----------------------------------------------------------------------------

export class UserFactory {
   private static generate() {
      const user = new User();
      user.username = faker.internet.userName();
      user.first_name = faker.person.firstName();
      user.last_name = faker.person.lastName();
      user.email = faker.internet.email({
         firstName: user.first_name,
         lastName: user.last_name,
         allowSpecialCharacters: true,
      });

      return user;
   }

   static create(count = 1) {
      return Array.from({ length: count }, this.generate);
   }
}
