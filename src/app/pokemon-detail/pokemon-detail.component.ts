import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from "../pokemon.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from "../pokemon.model"

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  id: number;
  Pokemon:any;
  isLoading=true;

  private sub: any;


  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
   this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    this.pokemonService.getPokemonDetail(this.id)
    .subscribe( pokemonDetails =>{
      console.log(pokemonDetails);
      this.Pokemon = pokemonDetails;
  this.isLoading=false;
  // Pokemon.abilities[0]
console.log(this.Pokemon.types[0].type)
    })
    });
  }

}
