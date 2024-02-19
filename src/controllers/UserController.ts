import { Controller } from "./Controller";
import { Request, Response } from "express";
import { User } from "../models/User";
import { AppDataSource } from "../data-source";
import { CreateUserRequestBody } from "../types/types";
import { StatusCodes } from "http-status-codes";
import { UserRoles } from "../constants/UserRoles";
import bcrypt from "bcrypt"
import { Filter } from "typeorm";
// -----------------------------------------------------------------------------

export class UserController implements Controller {
  async getAll(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const userRepository = AppDataSource.getRepository(User);

      const page = !req.query.page ? Number(req.query.page) : null;
      const limit = req.query.limit ? Number(req.query.limit) : null;

      interface filter {
        [key: string]: any;
      }


      const filter: filter = {
        select: {
          username: true,
          email: true,
          id: true,
        },
      };
      if (page && limit) {
        filter.skip = ((page - 1) * limit)
      }
      if(limit){
        filter.take = (limit)
      }


      //Paginación
      //let currentPage = page ? +page : 1;
      //let itemsPerPage = limit ? +limit : 5;

      const [allUsers, count] = await userRepository.findAndCount(filter);
      res.status(200).json({
        count,
        limit,
        page,
        results: allUsers,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while getting users",
      });
    }
  }

  async getById(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;

      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOneBy({
        id: id,
      });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: "Error while getting user",
      });
    }
  }

  async create(
   req: Request<{}, {}, CreateUserRequestBody>,
   res: Response
): Promise<void | Response<any>> {
   const { username, name, surname , password, email } = req.body;

   const userRepository = AppDataSource.getRepository(User);
   
   
   
 
      try {
         //Crear un nuevo usuario
         const newUser: User = {
           username,
           email,
           name,
           surname,
           password_hash: bcrypt.hashSync(password, 10),
           roles: [UserRoles.CLIENT],
         };

   await userRepository.save(newUser);

      res.status(StatusCodes.CREATED).json({
         messagee: "User created succesfully!",
      });
    } catch (error:any) {
      res.status(500).json({
         message: "Error while creating User",
         error: error.message,
      });
    }
  }

  async update(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;
      const data = req.body;

      const userRepository = AppDataSource.getRepository(User);
      const userUpdated = await userRepository.update({ id: id }, data);
      res.status(202).json({
        message: "User updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while updating user",
      });
    }
  }

  async delete(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;

      const userRepository = AppDataSource.getRepository(User);
      await userRepository.delete(id);

      res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (error:any) {
      res.status(500).json({
        message: "Error while deleting user",
        error: error.message,
      });
    }
  }
}
