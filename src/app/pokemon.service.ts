import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import {Pokemon} from './pokemon';
 
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  configUrl="https://pokeapi.co/api/v2/pokemon/1/";
  constructor(
    private http: HttpClient

  ) { }
   pokemonId;
 
 zeroPad = (num, places) => String(num).padStart(places, '0')

getAllPokemon() {
  return this.http.get(this.configUrl);
}

 fetchPokemons() {
  return this.http.get('https://pokeapi.co/api/v2/pokemon/')
  .pipe(map(responseData =>{
    const pokemonArray = [];
    for (const key in responseData["results"]){
      if (responseData["results"].hasOwnProperty(key)){
        this.pokemonId=this.zeroPad(1+parseInt(key), 3);
        pokemonArray.push({...responseData["results"][key], id:key});
    }
  }
  return pokemonArray;
  }))
  
}
getPokemonDetail(id){
  return this.http.get('https://pokeapi.co/api/v2/pokemon/'+id)
  .pipe(map(responseData =>{
    console.log(responseData)
      const pokemonDetailsObject = {};
    const interestingKeys =["name", "weight", "abilities", "base_experience","types" ,"stats","id","height" ]
      for (const key in interestingKeys){
        // this.pokemonId=this.zeroPad(1+parseInt(key), 3);
        pokemonDetailsObject[interestingKeys[key]]=responseData[interestingKeys[key]];
      }
  return pokemonDetailsObject;
  }))
 
}

}
