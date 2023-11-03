import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Observable } from 'rxjs';
import { Place } from '../place.model';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class DiscoverPage implements OnInit {
  public $places!:Observable<Place[]>; 

  constructor(private placesService: PlacesService) {
  }
  
  ngOnInit() {
    this.$places = this.placesService.loadPlaces();
  }

}
