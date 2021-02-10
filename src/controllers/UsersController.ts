import { Request, Response } from 'express'; // Necessário 
import { getRepository, Like } from "typeorm";
import Users from '../models/Users';

export default {
  async index(req: Request, res: Response) {

    const { name } = req.query;
    const usersRepository = getRepository(Users);

    var users = [];

    if (!name) {
      users = await usersRepository.find();
    } else {
      users = await usersRepository.find({
        name: Like(`%${name}%`)
      });
    }

    return res.json(users);
  },
  
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(Users);
    const user = await usersRepository.findOneOrFail(id);

    return res.json(user);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(Users);
    // const user = await usersRepository.findOneOrFail(id);
    await usersRepository.delete(id)
      .then( (response) => {
        console.log(response);
        return res.json({ 
          "status": "ok"
        });
      })
      .catch( (err) => {
        console.log(err);
        return res.json({ 
          "status": "error"
        });
      });

  },

  async modify(req: Request, res: Response) {
    const data = req.body;
    const usersRepository = getRepository(Users);
    const user = usersRepository.create(data);

    await usersRepository.save(user);

    res.status(201).json(user); 

  },

  async create(req: Request, res: Response) {
    const data = req.body;
    const usersRepository = getRepository(Users);
    const user = usersRepository.create(data);

    await usersRepository.save(user);

    res.status(201).json(user); // 201 = created.

  }
}
