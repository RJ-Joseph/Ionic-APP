import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Welcome {
  ejemplos: Ejemplo[];
}

export interface Ejemplo {
  _id:           string;
  Imagen:        string;
  Marca:         string;
  Tipo_Vehiculo: string;
  Tipo_Motor:    TipoMotor;
  Color:         string;
  Peso:          string[];
  Ano_Modelo:    string[];
}

export enum TipoMotor {
  Diesel = "Diesel",
  Eléctrico = "Eléctrico",
  Gasolina = "Gasolina",
  Híbrido = "Híbrido",
}

type ApiResponse = { ejemplos: Ejemplo[] }

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll(): Promise<ApiResponse> {
    
    return firstValueFrom(this.httpClient.get<ApiResponse>('http://localhost:3000/api/auto'))
      .then(response => {
        console.log('Respuesta de la API:', response);
        return response; 
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        throw error; 
      });
  }
}

