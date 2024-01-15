import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany,
  } from "typeorm";
  import { Role } from "./Role";
  import { Artist } from "./Artist";
  import { Appointment } from "./Appointments";
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    name!: string;
    
    @Column()
    username!:string;
  
    @Column()
    surname!: string;
  
    @Column()
    password_hash!: string;
  
    @Column()
    email!: string;
  
    @Column()
    phone!: string;
  
    @CreateDateColumn() // Usa el decorador CreateDateColumn para createdAt
    createdAt?: Date;
  
    @UpdateDateColumn() // Usa el decorador UpdateDateColumn para updatedAt
    updatedAt?: Date;
  
    @ManyToMany(() => Role, (role) => role.user)
    @JoinTable({
       name: "user_role",
       joinColumn: {
          name: "user_id",
          referencedColumnName: "id",
       },
       inverseJoinColumn: {
          name: "role_id",
          referencedColumnName: "id",
       },
    })
    roles!: Role[];
  
    @OneToMany(() => Artist, (artists) => artists.user)
    artists?: Artist[];
  
    @OneToMany(() => Appointment, (appointments) => appointments.user)
    clientappointments?: Appointment[];
   
   
  }
  