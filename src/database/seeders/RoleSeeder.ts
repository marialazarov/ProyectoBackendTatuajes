import { AppDataSource } from "../../data-source";
import { Role } from "../../models/Role";

export const roleSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const roleRespository = AppDataSource.getRepository(Role);

    const adminRole = new Role();
    adminRole.name = "admin";

    const artistRole = new Role();
    artistRole.name = "artist";

    const clientRole = new Role();
    clientRole.name = "client";

    await roleRespository.save([adminRole, clientRole, artistRole]);

    console.log('Seeding roles succesfully!')
    
  } catch (error) {
    console.error("Error seeding the database", error);
  } finally {
    await AppDataSource.destroy();
  }
};
