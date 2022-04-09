import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path:'create/:id',component:CreateComponent
  },
  {
    path:"read",component:ReadComponent
  },
  {
path:"create",component:CreateComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
