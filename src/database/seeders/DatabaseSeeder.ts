import { roleSeeder } from "./RoleSeeder";
import { Role } from "../../models/Role";
import { userSeeder } from "./UseerSeeder";

// -----------------------------------------------------------------------------


(async () => {
    await roleSeeder();
    await userSeeder();

})();


