import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const loader = new Loader({
      apiKey: "AIzaSyDroLKKl0NyML50NLE-H5BE8JziFdHAFJM"
    });

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 21.881146882782275, lng: -102.2965671578299 },
        zoom: 10,
      });
    });
  }

}
