import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from "../../pokemon.model";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() Pokemon :Pokemon[];
  pokemonId;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.Pokemon)
    this.pokemonId=String(1+parseInt(this.Pokemon['id']));
    
  }

}
