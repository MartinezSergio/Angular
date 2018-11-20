import { LogService } from './../services/log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styles: []
})
export class TracerComponent implements OnInit {

  constructor(public servicio: LogService) {
    servicio.escribirTraza("Estoy en el constructor.","Con un segundo parametro");
    servicio.escribirError("LuisMi aprendiendo.")
    servicio.escribirWarning("Cuidado LuisMi que viene el toro.")
   }

  ngOnInit() {
    this.servicio.escribirTraza("Estoy en el onInit.");
  }

}
