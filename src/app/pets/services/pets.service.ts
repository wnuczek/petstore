import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityStatus, Pet } from '../model';

export abstract class IEntityService<T> {
  abstract findByStatus(status: EntityStatus): Observable<T[]>;
  abstract add(entity: T): Observable<T>;
  abstract update(entity: T): Observable<T>;
}

@Injectable({
  providedIn: 'root',
})
export class PetsService implements IEntityService<Pet> {
  apiUrl = 'https://petstore.swagger.io/v2';

  private http = inject(HttpClient);

  public findByStatus(status: Pet['status']): Observable<Pet[]> {
    return this.http.get<Pet[]>(
      `${this.apiUrl}/pet/findByStatus?status=${status}`
    );
  }

  public add(pet: Pet) {
    return this.http.post<Pet>(`${this.apiUrl}/pet`, pet);
  }

  public update(pet: Pet) {
    return this.http.put<Pet>(`${this.apiUrl}/pet`, pet);
  }
}
