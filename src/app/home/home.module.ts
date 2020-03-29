import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {RecentProjectComponent} from './components/recent-project/recent-project.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [HomeComponent, RecentProjectComponent, SliderComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
