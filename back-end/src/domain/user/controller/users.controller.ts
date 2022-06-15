import { Users } from "../models/users";
import { Request, Response} from "express";
import { userService } from "../service";
import bcrypt from "bcryptjs";

export const UserController = {
    async create(req: Request, res: Response) {
      try {
        const newUser = await userService.registerUser(req.body);
        return res.status(201).json(newUser);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    async update(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const { password } = req.body;
        const payloadUpdate = {};
        Object.assign(payloadUpdate, req.body);
        if (password) {
          const newPassword = bcrypt.hashSync(password, 10);
          Object.assign(payloadUpdate, { password: newPassword });
        }
        await Users.update(payloadUpdate, {
          where: { id },
        });
        const userUpdated = await Users.findByPk(id);
        return res.status(200).json(userUpdated);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    },
    async delete(req: Request, res: Response) {
      try {
        const { id } = req.params;
        // const hasPosts = await Posts.count({
        //   where: {
        //     user_id: id,
        //   },
        // });
        // if (hasPosts) {
        //   return res
        //     .status(401)
        //     .json(
        //       "Existe posts associados a esse usuário, não é possivel deletar!"
        //     );
        // }
        await Users.destroy({
          where: {
            id,
          },
        });
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    },
    async getAll(req: Request, res: Response) {
      try {
        const user = await Users.findAll();
        return res.json(user);
      } catch (error) {
        console.log(error);
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    },
    async getOne(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const user = await Users.findByPk(id);
        return res.json(user);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    },
  };
  
  
  
  
  
  
  
  
  
  
  