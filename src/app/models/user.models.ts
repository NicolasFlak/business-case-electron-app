
export interface UserHttp { //donnée qui arrive du back
  id: number,
  lastname: string,
  firstname: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  roles: { id: number, roleName: string } [],
  commands: { id: number, "remarque": "string", "payment": true} []
}

export interface User { // donnée qu'on transmet
  id: number,
  lastname: string,
  firstname: string,
  username: string,
  email: string,
  fullname: string
  roles: { id: number, roleName: string } [],
  // commands: { "id": 0, "remarque": "string", "payment": true} []
}

export namespace User {

  export function mapperUserHttpToUser(userHttp: UserHttp): User {
    return {
      id: userHttp.id,
      email: userHttp.email,
      firstname: userHttp.firstname,
      lastname: userHttp.lastname,
      username: userHttp.username,
      fullname: `${userHttp.firstname} ${userHttp.lastname}`,
      roles: userHttp.roles
    }
  }
}
