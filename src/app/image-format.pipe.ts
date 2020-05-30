import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFormat'
})
export class ImageFormatPipe implements PipeTransform {

  transform(id: string):string {
     let newStr ="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+id + ".png";
    return newStr;
  }

}
