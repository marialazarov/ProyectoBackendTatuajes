import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn, // Importa el decorador CreateDateColumn
    UpdateDateColumn, // Importa el decorador UpdateDateColumn
  } from "typeorm";
  
  import { Artist } from "./Artist";
  
  @Entity()
  export class Designs {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    pictures?: string;
  
    @Column()
    style!: string;
  
    @CreateDateColumn() 
    createdAt!: Date;
  
    @UpdateDateColumn() 
    updatedAt!: Date;
  
    @ManyToOne(() => Artist, (artist) => artist.designs)
    @JoinColumn({ name: "artist_id" })
    artist!: Artist;
  }
  