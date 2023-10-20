import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/movies';
import {ApiResponse} from '../interfaces/ApiResponse'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // key 3d1652ef

  private url_endPoint: string = "https://www.omdbapi.com/?apikey=3d1652ef"
  constructor(private http: HttpClient) {

  }

  getMovies(stringTerm: string): Observable<Movies[]> {
   return this.http.get<ApiResponse>(`${this.url_endPoint}&s=${stringTerm}`).pipe(
    map((response): any => {
      return response.Search;
    })
   )
  }
}
