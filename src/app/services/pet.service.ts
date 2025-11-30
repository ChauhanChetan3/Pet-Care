import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  // apiUrl:string="https://ide-bacdaddceafccefebdfdedddbdfbedbebb.premiumproject.examly.io/proxy/8080/api/pet";
  apiUrl:string="http://localhost:8080/api/pet";

  constructor(private httpClient:HttpClient) { }

  createPet(pet:Pet):Observable<Pet>{
    return this.httpClient.post(this.apiUrl,pet) as Observable<Pet>;
  }

  getPetById(id:number):Observable<Pet>{
    return this.httpClient.get(this.apiUrl+"/"+id) as Observable<Pet>;

  }

  getUserPetsById(id:number):Observable<Pet[]>{
    return this.httpClient.get(this.apiUrl+"/user/"+id) as Observable<Pet[]>;
  }

  deletePet(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl+"/"+id);
  }

  updatePet(id:number,pet:Pet):Observable<Pet>{
    return this.httpClient.put(this.apiUrl+"/"+id,pet) as Observable<Pet>;``
  }
}
