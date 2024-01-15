import { Role } from "../models/Role";

export const UserRoles = {
   ADMIN: { id: 1, name: "admin" } as Role,
   CLIENT: { id: 2, name: "client" } as Role,
   SUPER_ADMIN: { id: 3, name: "super_admin" } as Role,
};