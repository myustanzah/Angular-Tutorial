import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDzEM2JAB9b_vOxdgkBxSfXNjjx-yLbmdQ',
    });
    let map: google.maps.Map;
    const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center,
        zoom: 8,
      });
    });
  }
}
