import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export default class Roles {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  role_name: string;
  
  @Column()
  tcode: string;
  
  @Column()
  functions: string;

}