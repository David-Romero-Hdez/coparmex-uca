import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMapComponent } from './main-map/main-map.component';
import { RouterModule } from '@angular/router';
import { MapInfoComponent } from './map-info/map-info.component';



@NgModule({
  declarations: [
    MainMapComponent,
    MapInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'map', component: MainMapComponent }
    ])
  ]
})
export class MapModule { }
