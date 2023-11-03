import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class EditOfferPage implements OnInit {
  place$!:Observable<Place|undefined>
  constructor( 
    private route:ActivatedRoute,
    private placesService: PlacesService,
    private navController: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if(!paramMap.has('placeId')){
        this.navController.navigateBack('/places/tabs/offers')
      }
      this.place$ = this.placesService.loadPlace(paramMap.get('placeId')!);
    })
  }

}
