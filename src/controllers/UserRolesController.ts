import { Request, Response } from 'express'; // Necessário 
import { getRepository } from "typeorm";
import UserRoles from '../models/UserRoles';

export default {
  async index(req: Request, res: Response) {
    const userRolesRepository = getRepository(UserRoles);
    const userRoles = await userRolesRepository.find();

    return res.json(userRoles);
  },
  
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const userRolesRepository = getRepository(UserRoles);
    const user = await userRolesRepository.findOneOrFail(id);

    return res.json(user);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const userRolesRepository = getRepository(UserRoles);

    await userRolesRepository.delete(id)
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
    const userRolesRepository = getRepository(UserRoles);
    const user = userRolesRepository.create(data);

    await userRolesRepository.save(user);

    res.status(201).json(user); 

  },

  async create(req: Request, res: Response) {
    const data = req.body;
    const userRolesRepository = getRepository(UserRoles);
    const user = userRolesRepository.create(data);

    await userRolesRepository.save(user);

    res.status(201).json(user); // 201 = created.

  }
}
