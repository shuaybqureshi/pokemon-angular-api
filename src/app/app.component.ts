import { Component, OnInit } from '@angular/core';
import { PokemonService } from "./pokemon.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pokemon } from "./pokemon.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  loadedPokemons:Pokemon[]= [];


  ngOnInit() {
    console.log("ngOnInit has started");
    // this.fetchPosts();
    this.pokemonService.fetchPokemons()
    .subscribe( pokemons =>{
      this.loadedPokemons = pokemons;
    })
  }
  constructor(
    private pokemonService: PokemonService,
    private http: HttpClient

    ) { }


showAllPokemon() {
  this.pokemonService.getAllPokemon()
    .subscribe((data) =>  {
      // console.log(data);
    });
}

}
