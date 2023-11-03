import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Observable } from 'rxjs';
import { Place } from '../../place.model';
import { CreateBookingPage } from 'src/app/bookings/create-booking/create-booking.page';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule]
})
export class PlaceDetailPage implements OnInit {
  place$!:Observable<Place|undefined>;

  constructor(
    private route:ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if(!paramMap.has('placeId')){
        this.navController.navigateBack('/places/tabs/discover');
      }
      this.place$ = this.placesService.loadPlace(paramMap.get('placeId')!)
    })
  }

  public onBookPlace(): void{
    this.modalCtrl.create({component: 
      CreateBookingPage,
      componentProps:{
        selectedPlace$: this.place$
      }
    }).then(modalEl => {
      modalEl.present();
    });
  }
}
