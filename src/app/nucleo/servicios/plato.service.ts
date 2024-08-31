import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Plato {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  descripcion: string;
}
@Injectable({
  providedIn: 'root',
})
export class PlatoService {
  private urlPlatos = 'api/platos';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los platos
  getPlatos(): Observable<Plato[]> {
    return this.http.get<Plato[]>(this.urlPlatos);
  }

  // Método para actualizar un plato
  updatePlato(plato: Plato): Observable<Plato> {
    return this.http.put<Plato>(`${this.urlPlatos}/${plato.id}`, plato);
  }
}
