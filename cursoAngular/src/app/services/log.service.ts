import { Injectable } from "@angular/core";
import { element } from "@angular/core/src/render3";

@Injectable({
  providedIn: "root"
})
export class LogService {
  constructor() {}

  escribirTraza(...mensaje: string[]) {
    //Un mensaje por linea, elemento
    mensaje.forEach(msg => {
      console.log(msg);
    });
  }
  escribirError(...mensaje: string[]) {
    mensaje.forEach(msg => {
      console.error(msg);
    });
  }
  escribirWarning(...mensaje: string[]) {
    mensaje.forEach(msg => {
      console.warn(msg);
    });
  }
}
