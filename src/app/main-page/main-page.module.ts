import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { MapDisplayComponent } from './map-display/map-display.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SignupComponent,
    MapDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
