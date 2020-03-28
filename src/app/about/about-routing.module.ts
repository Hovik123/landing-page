import { NgModule } from '@angular/core';
import {RouterModule, Routes, ROUTES} from '@angular/router';
import {AboutComponent} from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
