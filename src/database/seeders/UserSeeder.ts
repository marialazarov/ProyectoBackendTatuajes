import { AppDataSource } from "../../data-source";
import { Role } from "../../models/Role";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";

export const userSeeder = async () => {
  try {
    await AppDataSource.initialize();


    const count = 3

    await createUserWithRoles({
      roles: [{id:2, name:"client"} as Role],
      count,
      
    });
    console.log("Seeding users completed succesfully");
  } catch (error) {
    console.error("Error seeding the database", error);
  } finally {
    await AppDataSource.destroy();
  }
};

export const createUserWithRoles = async ({
  roles,
  count,
}: {
  roles: Role[];

  count: number;
}): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const userFactory = new UserFactory(userRepository);

  const users = userFactory.createMany(count);

  users.forEach((user) => (user.roles = roles));

  await userRepository.save(users);

  return users;
};
