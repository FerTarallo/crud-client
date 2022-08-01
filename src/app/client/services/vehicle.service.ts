import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca, Modelo, Vehicle } from 'src/app/shared/models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public API_URL = 'https://parallelum.com.br/fipe/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  getVehicles() {
    const vehicles: Vehicle[] = [];

    this.http.get<any>(`${this.API_URL}/carros/marcas`).subscribe(marcas => {
      marcas.map((marca: Marca) => {
        this.http.get<any>(`${this.API_URL}/carros/marcas/${marca.codigo}/modelos`).subscribe(modelos => {
          modelos.modelos.map((modelo: Modelo) => {
            let response = {
              id: modelo.codigo,
              brand: marca.nome,
              name: modelo.nome
            }

            vehicles.push(response);
          });
        });
      });
    });

    return vehicles;
  }
}


