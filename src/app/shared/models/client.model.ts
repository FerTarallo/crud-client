interface Address {
  street: string;
  number: number;
  district: string;
  city: string;
  state: string;
  cep: string;
}

export class Client {
  constructor(
    public id?: string,
    public name?: string,
    public birthdate?: string,
    public cpf?: string,
    public cellphone?: string,
    public address?: Address,
    public vehicle?: string,
  ){}
}
