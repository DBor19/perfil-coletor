import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoperfilComponent } from './fotoperfil/fotoperfil.component';

const routes: Routes = [
  {path:'usuario', component: FotoperfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
