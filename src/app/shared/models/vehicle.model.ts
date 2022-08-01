export interface Marca {
  nome: string;
  codigo: string;
}

export interface Modelo {
  codigo: string;
  nome: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  name: string;
}

export class Vehicle {
}
