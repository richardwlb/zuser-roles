import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_roles')
export default class UserRoles {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  id_user: number;
  
  @Column()
  id_role: number;

}