import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDzEM2JAB9b_vOxdgkBxSfXNjjx-yLbmdQ',
    });
    let map: google.maps.Map;
    const center: google.maps.LatLngLiteral = { lat: -6.21462, lng: 106.84515 };

    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center,
        zoom: 8,
      });
    });
  }
}
