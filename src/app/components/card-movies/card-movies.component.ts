import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';

import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.css']
})
export class CardMoviesComponent implements OnInit {
   @Input('movie') movie !: any;
  constructor() { }

  ngOnInit(): void {
   
  }

getImagen(){ 
  if(this.movie.Poster == 'N/A'){
    return 'http://via.placeholder.com/600'
  }
  else{
    return this.movie.Poster;
  }
}

}
