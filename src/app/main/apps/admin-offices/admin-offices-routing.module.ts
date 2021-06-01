import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOfficWorkComponent } from './new-offic-work/new-offic-work.component';

const routes: Routes = [
  {path:'new-office-work-list', component:NewOfficWorkComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOfficesRoutingModule { }
