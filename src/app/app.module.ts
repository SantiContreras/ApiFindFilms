//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMoviesComponent } from './components/card-movies/card-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
