import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit  {
  @ViewChild(`#movieSarchInput`,{static:true}) movieSarchInput!:ElementRef //para que se vaya el error ponemnos !
  movies:any[] = []
  constructor(private serviceMovie: MovieService) { }

  ngOnInit(): void {
    fromEvent<Event>(this.movieSarchInput.nativeElement, 'keyup').pipe(
      map((event:Event)=>{
        const searchTermn =  (event.target as HTMLInputElement).value;
        return searchTermn
      }),
      tap( (searchTerm : string) =>console.log(searchTerm))
    ).subscribe((searhTermn:string) =>{
      this.getMovies(searhTermn)
    })
  }


  getMovies(searchTermn:string ){

     
    this.serviceMovie.getMovies(searchTermn).subscribe( data=> {
       console.log(data)
      this.movies = data !== undefined? data : []
      

    })
   
     
  }

}
