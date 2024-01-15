export interface CreateUserRequestBody{
    username: string;
    name: string;
    surname: string;
    password: string;
    email:string;
    phone: string;
    createdAt?: Date;
    updatedAt?: Date;

}

