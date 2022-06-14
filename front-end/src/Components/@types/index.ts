export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    apartment: string;
    link:string;
}

export interface SigIn{
    email: string,
    password: string,
}
