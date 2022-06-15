import { Users } from "../models/users";
import bcrypt from "bcryptjs";

export class UserService {
    async registerUser(data: any){
        const { password } = data;
        
        const newPassword = bcrypt.hashSync(password, 10);

        const newUser = await Users.create({
            ...data,
            password: newPassword,
        });

    return newUser;
    }
}
