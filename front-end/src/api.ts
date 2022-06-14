import axios from "axios";
import { User } from "./Components/@types";

const api = axios.create({baseURL: "http://localhost:3333"});

export const getUsers = async ():Promise<User[]> => {
    return await api.get("/users");
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    return await api.post("/users", user);
}