
import { AppDataSource } from "../../data-source";
import { Role } from "../../models/Role";
import { Artist } from "../../models/Artist";
import { ArtistFactory } from "../factories/ArtistFactory";
import { createUserWithRoles } from "./UserSeeder";

export const artistSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const artistRespository = AppDataSource.getRepository(Artist);
    const artistFactory = new ArtistFactory(artistRespository);
    const count = 10

   const users = await createUserWithRoles({
      roles: [{id:1, name:"admin"} as Role],
      count,
      
    });


    const artist = artistFactory.createMany(count)
    artist.forEach((artists,index)=> artist.user = users[index])

    


    console.log("Seeding users completed succesfully");
  } catch (error) {
    console.error("Error seeding the database", error);
  } finally {
    await AppDataSource.destroy();
  }
};



