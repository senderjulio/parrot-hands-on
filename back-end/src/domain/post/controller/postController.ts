import { Posts } from './../models/posts';
import { Request, Response} from "express";
import { postService } from "../service";
import bcrypt from "bcryptjs";

export const PostController = {
    async create(req: Request, res: Response) {
      try {
        const newPost = await postService.registerPost(req.body);
        return res.status(201).json(newPost);
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
        await Posts.update(payloadUpdate, {
          where: { id },
        });
        const postUpdated = await Posts.findByPk(id);
        return res.status(200).json(postUpdated);
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
        await Posts.destroy({
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
        const post = await Posts.findAll();
        return res.json(post);
      } catch (error) {
        console.log(error);
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    },
    async getOne(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const post = await Posts.findByPk(id);
        return res.json(post);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    },
  };
  