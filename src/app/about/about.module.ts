import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about.component';
import {TeamMembersComponent} from './components/team-members/team-members.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [AboutComponent, TeamMembersComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
