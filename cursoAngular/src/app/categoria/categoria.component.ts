import { LogService } from "./../services/log.service";
import { HttpClient } from "selenium-webdriver/http";
import { Component, OnInit } from "@angular/core";
import { RemoteDataService } from "../services/remote-data.service";
import { Categoria } from "../models/categoria";
import { Observable } from "rxjs";
import { interval } from "rxjs";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html",
  styles: []
})
export class CategoriaComponent implements OnInit {
  public data: Observable<Array<Categoria>>;
  public data1: Observable<Categoria>;
  public envioDatos;

  contador = interval(2000);


  constructor(public remote: RemoteDataService) {}

  ngOnInit() {
    this.data = this.remote.retornarData();

    this.data.subscribe(arrayData => {
      this.envioDatos = arrayData;
    });
/*
    this.contador.subscribe(segundo =>{
      console.log(`Estamos en el segundo ${segundo} del interval`);
    });
  */}

  retornaUnaCategoria(id: number) {
    this.data1 = this.remote.retornarDataSoloUno(id);
    this.data1.subscribe(arrayData => {
      console.log(arrayData.id);
      console.log(arrayData.nombre);
    });
  }
}
