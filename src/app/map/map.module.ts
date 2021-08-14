import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMapComponent } from './main-map/main-map.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'map', component: MainMapComponent }
    ])
  ]
})
export class MapModule { }
