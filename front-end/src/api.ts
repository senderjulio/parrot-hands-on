import axios from "axios";
import { User, SigIn } from "./Components/@types";

const api = axios.create({baseURL: "http://localhost:3333"});

export const getUsers = (id?:number):Promise<User[]> =>{
    return  api.get<User[]>(`/users/${id}`).then(renponse=>renponse.data)
}

// export const getUsers = async ():Promise<User[]> => {
//     return await api.get("/users");
// }

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    return await api.post("/register", user);
}
export const updateUser = async (user: Omit<User, 'id'>): Promise<User> => {
    return await api.put("/register", user);
}

export const postSigin = async (sigIn: SigIn) => {
    try {
        const response = await api.post("/signin", sigIn)
        return response.data
    } catch (error) {
        return error;
        
    }
}