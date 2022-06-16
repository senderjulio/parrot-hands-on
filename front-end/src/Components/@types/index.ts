export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    apartment: string | number;
    link?:string;
}

export interface SigIn{
    email: string,
    password: string,
}

export interface Post{
    description: string;
    name: string;
    apartment: string;
}
