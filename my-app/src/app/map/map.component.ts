import { Component, OnInit, Input } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  @Input() a!: number;
  @Input() b!: number;

  changeKordinat(korLat: number, korLng: number) {
    this.a = korLat;
    this.b = korLng;
    return { lat: korLat, lng: korLng };
  }
  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDzEM2JAB9b_vOxdgkBxSfXNjjx-yLbmdQ',
    });
    let cordinat;
    if (!this.a && !this.b) {
      cordinat = { lat: -6.21462, lng: 106.84515 };
    } else {
      cordinat = { lat: this.a, lng: this.b };
    }
    let map: google.maps.Map;
    const center: google.maps.LatLngLiteral = cordinat;

    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center,
        zoom: 8,
      });
    });
  }
}
