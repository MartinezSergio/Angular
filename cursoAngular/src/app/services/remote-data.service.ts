import { Categoria } from './../models/categoria';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(public httpClient: HttpClient) { }

  retornarData(){
    return this.httpClient.get<Array<Categoria>>('http://localhost:8081/categoria');
    //return this.httpClient.get<Array<Categoria>>('http://192.168.1.80:8090/categoria');
  }

  retornarDataSoloUno(id: number){
    return this.httpClient.get<Categoria>('http://localhost:8081/categoria/' + id);
  }

  crearData(c:Categoria): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post<Categoria>('http://localhost:8081/categoria/', c, {headers: headers});
  }
}
