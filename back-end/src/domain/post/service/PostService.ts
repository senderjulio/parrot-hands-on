import { Posts } from "../models/posts";
import bcrypt from "bcryptjs";

export class PostService {
    async registerPost(data: any){
        const newPost = await Posts.create({
            ...data,
        });

    return newPost;
    }
}