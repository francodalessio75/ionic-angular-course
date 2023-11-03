import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class OffersPage {
  offers$:Observable<Place[]>;

  constructor( private placesService:PlacesService) {
    this.offers$ = this.placesService.loadPlaces();
   }

}
