import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoAgregarComponent } from './components/productos/producto-agregar/producto-agregar.component';
import { ProductoEditarComponent } from './components/productos/producto-editar/producto-editar.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoListarComponent } from './components/productos/producto-listar/producto-listar.component';



const routes: Routes = [

  {path:'productos', component:ProductoIndexComponent},
  {path:'listar', component:ProductoListarComponent},
  {path:'agregar', component:ProductoAgregarComponent},
  {path:'editar', component:ProductoEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
