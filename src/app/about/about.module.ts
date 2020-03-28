import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressesComponent } from './components/progresses/progresses.component';
import {TeamMembersComponent} from './components/team-members/team-members.component';
import {AboutComponent} from './about.component';
import {AboutRoutingModule} from './about-routing.module';


@NgModule({
  declarations: [ProgressesComponent, TeamMembersComponent, AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
