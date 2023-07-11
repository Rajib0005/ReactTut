export interface ICredential {
    email: string,
    password: string,
    role : Roles
}

export enum Roles {
    Admin,
    User
}




