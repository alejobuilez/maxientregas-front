import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css']
})
export class ProductoIndexComponent implements OnInit {

  constructor(private router:Router){}

Listar(){
  this.router.navigate(["listar"]);
}

Nuevo(){
  this.router.navigate(["agregar"]);
}

  ngOnInit(): void {
  }

}
