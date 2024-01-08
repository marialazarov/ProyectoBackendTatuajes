import "reflect-metadata";

import { DataSource } from "typeorm";
import { CreateAppointments1704211291667 } from "./database/migrations/1704211291667-CreateAppointments";
import { CreateArtists1704141714818 } from "./database/migrations/1704141714818-CreateArtists";
import { CreateUsers1704136987986 } from "./database/migrations/1704136987986-CreateUsers";
import { CreateRoles1704132281137 } from "./database/migrations/1704132281137-CreateRoles";
import { CreateDesigns1704213639562 } from "./database/migrations/1704213639562-CreateDesigns";
// -----------------------------------------------------------------------------

export const AppDataSource = new DataSource({
   type: "mysql",
   host: "localhost",
   port: 3307,
   username: "root",
   password: "root",
   database: "proyecto4_backend",
   
   entities: [`${__dirname}/../models/**/*{.js,.ts}`],
   
   migrations: [CreateAppointments1704211291667,CreateArtists1704141714818,CreateUsers1704136987986,CreateRoles1704132281137, CreateDesigns1704213639562],
   synchronize: false,
   logging: false,
});

