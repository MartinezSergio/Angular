import { LogService } from './../services/log.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Component, OnInit } from '@angular/core';
import { RemoteDataService } from '../services/remote-data.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  constructor(public remote: RemoteDataService) {

   }

  ngOnInit() {
    this.remote.retornarData();
  }

}
