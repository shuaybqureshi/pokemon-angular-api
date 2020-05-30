import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from "../pokemon.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loadedPokemons:Pokemon[]= [];

  constructor(
    private pokemonService: PokemonService,
    private http: HttpClient

    ) { }

    ngOnInit() {
      // console.log("Dashboard...");
      this.pokemonService.fetchPokemons()
      .subscribe( pokemons =>{
        this.loadedPokemons = pokemons;
        console.log(pokemons);  
      })
    }

}
