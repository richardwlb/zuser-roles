import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  user_name: string;
  
  @Column()
  name: string;

}