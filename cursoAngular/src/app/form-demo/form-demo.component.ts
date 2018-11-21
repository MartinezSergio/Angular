import { Categoria } from "./../models/categoria";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RemoteDataService } from "../services/remote-data.service";

@Component({
  selector: "app-form-demo",
  templateUrl: "./form-demo.component.html",
  styles: []
})
export class FormDemoComponent implements OnInit {
  public cat: Categoria;
  enviado = false;

  constructor(public remote: RemoteDataService) {
    this.cat = new Categoria();
  }

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.remote.crearData(this.cat).subscribe(
      result => {
        console.log("repuesta " + result);
      },
      error => {
        console.log(<any>error);
      }
    );
    this.enviado = true;
    console.log(this.cat);
  }

  limpiar(f: NgForm) {
    f.reset();
    this.enviado = false;
  }
}
