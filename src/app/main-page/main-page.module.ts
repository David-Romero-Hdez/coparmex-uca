import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SignupComponent,
    MapDisplayComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'home', component: MapDisplayComponent }
    ])
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
  ]
})
export class MainPageModule { }
