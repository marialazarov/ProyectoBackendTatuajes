import { Controller } from "./Controller";
import { Request, Response } from "express";
import { User } from "../models/User";
import { AppDataSource } from "../data-source";
import { Artist } from "../models/Artist";
import { UserRoles } from "../constants/UserRoles";
import {
   CreateUserRequestBody,} from "../types/types";
import bcrypt from "bcrypt";

// -----------------------------------------------------------------------------

export class ArtistController implements Controller {
   async getAll(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const artistRepository = AppDataSource.getRepository(Artist);
         
         const allArtists = await artistRepository.find();
         res.status(200).json(allArtists);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting users",
         });
      }
   }

   async getById(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;

         const artistRepository = AppDataSource.getRepository(Artist);
         const artist = await artistRepository.findOneBy({
            id: id,
         });

         if (!artist) {
            return res.status(404).json({
               message: "Artist not found",
            });
         }

         res.status(200).json(artist);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting artist",
         });
      }
   }


   async create(
      req: Request<{}, {},CreateUserRequestBody>,
      res: Response
    ): Promise<void | Response<any>> {
      const { username, name, surname, password, email } = req.body;
    
      const userRepository = AppDataSource.getRepository(User);
      
    
      try {
        // Crear nuevo usuario
        const newUser: User = {
          username,
          name,
          surname,
          email,
          password_hash: bcrypt.hashSync(password, 10),
          roles: [UserRoles.ADMIN],
        };
        await userRepository.save(newUser);
     //Crear nuevo artista asociado al usuario
        
     if (newUser.roles.includes(UserRoles.ADMIN)) { 
        // Si es un artista, también crea una entrada en la tabla de artistas. 
        const artistRepository = AppDataSource.getRepository(Artist); 
        const newArtist = artistRepository.create({ 
          user_id: newUser.id, // Asocia el nuevo artista con el usuario recién creado. 
          portfolio: "https://"
        }); 
   
        await artistRepository.save(newArtist); 
      } 
   
      res.status(201).json("Artist succesfully created!"); 
    } catch (error: any) { 
      console.error("Error while creating artist:", error); 
      res.status(500).json({ 
        message: "Error while creating artis", 
        error: error.message, 
      }); 
    } 
  }
 
    

   async update(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;
         const data = req.body;

         const artistRepository = AppDataSource.getRepository(Artist);
         const artistUpdated = await artistRepository.update({ id: id }, data);
         res.status(202).json({
            message: "Artist updated successfully",
         });
      } catch (error) {
         res.status(500).json({
            message: "Error while updating artist",
         });
      }
   }

   async delete(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;

         const artistRepository = AppDataSource.getRepository(Artist);
         await artistRepository.delete(id);

         res.status(200).json({
            message: "Artist deleted successfully",
         });
      } catch (error) {
         res.status(500).json({
            message: "Error while deleting Artist",
         });
      }
   }
}