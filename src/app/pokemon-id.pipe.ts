import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonId'
})
export class PokemonIdPipe implements PipeTransform {
  zeroPad = (num, places) => String(num).padStart(places, '0')

  transform(id:string) {
   let pokemonId= this.zeroPad(parseInt(id), 3);

    return pokemonId;
  }

}
