import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    {
      id:'p1',
      title: 'Manahattan Mansion',
      description: 'In the heart of New York City',
      imageUrl:'https://picsum.photos/id/0/5000/3333',
      price: 149.99
    },
    {
      id:'p2',
      title: 'L\'Amour Toujours',
      description: 'A romantic ppace in Paris',
      imageUrl:'https://picsum.photos/id/22/4434/3729',
      price: 189.99
    },
    {
      id:'p3',
      title: 'The foggy palace',
      description: 'Not your average city trip',
      imageUrl:'https://picsum.photos/id/27/3264/1836',
      price: 99.99
    },

  ];

  loadPlaces():Observable<Place[]>{
    return of([...this._places]);
  }

  loadPlace( parmaId:string ):Observable<Place | undefined>{
    let result: Place|undefined;
    this.loadPlaces().subscribe( places => 
      result = {...places.find( p =>  p.id === parmaId )} as Place
    )
    return of(result)
  }
}
