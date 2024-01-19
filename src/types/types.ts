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

export interface CreateArtistRequestBody {
    user_id: number;
    name: string;
    portfolio: string;
    
 
 }


export interface LoginUserRequestBody{
  
    password: string;
    email:string;
 

}

export interface TokenData {
    userId: string,
    userRoles: string[]
}

export interface CreateAppointmentsRequestBody {
    user_id: number,
    artist_id:number,
    date: Date;
    hour: string
  }