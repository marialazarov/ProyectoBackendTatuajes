import { AppDataSource } from "../../data-source";
import { Role } from "../../models/Role";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";

export const userSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const userRepository = AppDataSource.getRepository(User);

    const count = 3;
    //Generar usuarios
    const users = UserFactory.createMany(count);
    //asignar relaciones de roles
    users.forEach(
      (user) =>
        (user.roles = [
          { id: 1, name: "admin" } as Role,
          { id: 2, name: "client" } as Role,
        ])
    );

    await userRepository.save(users);

    console.log("Seeding users completed succesfully");
  } catch (error) {
    console.error("Error seeding the database", error);
  } finally {
    await AppDataSource.destroy();
  }
};
