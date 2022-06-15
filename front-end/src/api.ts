import axios, { AxiosError } from "axios";
import { User, SigIn, Post } from "./Components/@types";

const api = axios.create({baseURL: "http://localhost:3333"});

export const getUsers = (id?:number):Promise<User> =>{
    return  api.get<User>(`/users/${id}`).then(renponse=>renponse.data)
}
export const getPosts = ():Promise<Post[]> =>{
    return  api.get<Post[]>(`/posts/`).then(renponse=>renponse.data)
}

// export const getUsers = async ():Promise<User[]> => {
//     return await api.get("/users");
// }

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    try {
        return await api.post("/register", user);
    } catch (error) {
        return error as unknown as User;        
    }
    
}
export const updateUser = async (id:number,user: Omit<User, 'id'>): Promise<User> => {
    return await api.put(`/users/${id}`, user);
}

export const postSigin = async (sigIn: SigIn) => {
    try {
        const response = await api.post("/signin", sigIn)
        return response.data
    } catch (error) {
        return error;
        
    }
}