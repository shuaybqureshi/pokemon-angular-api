import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './dashboard/pokemon-card/pokemon-card.component';
import { ImageFormatPipe } from './image-format.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonIdPipe } from './pokemon-id.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    ImageFormatPipe,
    DashboardComponent,
    PokemonDetailComponent,
    PokemonIdPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
