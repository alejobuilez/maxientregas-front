import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {

  constructor(private router:Router){}



Guardar(){
  this.router.navigate(["agregar"]);
}

  ngOnInit(): void {
  }

}
