import { Request, Response } from 'express'; // Necessário 
import { getRepository } from "typeorm";
import Roles from '../models/Roles';

export default {
  async index(req: Request, res: Response) {
    const rolesRepository = getRepository(Roles);
    const roles = await rolesRepository.find();

    return res.json(roles);
  },
  
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const rolesRepository = getRepository(Roles);
    const role = await rolesRepository.findOneOrFail(id);

    return res.json(role);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const rolesRepository = getRepository(Roles);

    await rolesRepository.delete(id)
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
    const rolesRepository = getRepository(Roles);
    const role = rolesRepository.create(data);

    await rolesRepository.save(role);

    res.status(201).json(role); 

  },

  async create(req: Request, res: Response) {
    const data = req.body;
    const rolesRepository = getRepository(Roles);
    const role = rolesRepository.create(data);

    await rolesRepository.save(role);

    res.status(201).json(role); // 201 = created.

  }
}
