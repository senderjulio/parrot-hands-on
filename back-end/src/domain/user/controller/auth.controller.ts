import { Users } from "../models/users";
import { Request, Response} from "express";
import bcrypt from "bcryptjs";
import { secret } from "../../../infrastructure/middleware/secret"
import jwt from "jsonwebtoken";

export const AuthController = {
    async login(req: Request, res: Response){
        try {
            const {email, password} = req.body;
            const userLogado = await Users.findOne({
                where: {
                    email,
                }
            });

            if(!userLogado){
                return res.status(404).json('Usuario inexistente na base de dados')
            }else {
                if(!bcrypt.compareSync(password, userLogado.password)){
                    return res.status(404).json('Senha invalida')
                }
            }
            
            const token = jwt.sign({
                id: userLogado.id,
                nome: userLogado.nome,
                email: userLogado.email
            }, secret.key);

            return res.json(token);
        } catch (error) {
            console.log('Login não realizado');
            console.error(error);
            return res.status(500).json('Erro ao realizar login');
        }

    }
};