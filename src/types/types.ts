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

export interface LoginUserRequestBody{
  
    password: string;
    email:string;
 

}

