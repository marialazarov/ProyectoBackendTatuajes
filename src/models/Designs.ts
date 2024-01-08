import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Artist } from "./Artist";

@Entity()
export class Designs {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  picture!: string;

  @Column()
  style!: string;

  @CreatedDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Artist, (artist) => artist.designs)
  @JoinColumn({ name: "artist_id" })
  artist!: Artist;
}

function CreatedDateColumn(): (
  target: Designs,
  propertyKey: "createdAt"
) => void {
  throw new Error("Function not implemented.");
}

function UpdateDateColumn(): (
  target: Designs,
  propertyKey: "updatedAt"
) => void {
  throw new Error("Function not implemented.");
}
function JoinColumn(arg0: {
  name: string;
}): (target: Designs, propertyKey: "artist") => void {
  throw new Error("Function not implemented.");
}
