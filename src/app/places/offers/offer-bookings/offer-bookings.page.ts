import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class OfferBookingsPage implements OnInit {
  place$!:Observable<Place|undefined>;

  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private placesService:PlacesService) {}

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if(!paramMap.has('placeId')){
        this.navController.navigateBack('/places/tabs/offers')
      }
      this.place$ = this.placesService.loadPlace(paramMap.get('placeId')!);
    })
  }

}
