import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, estado: Boolean=true): string {

    if(estado==true){
  

   let  result:string="";
      for (let index = 0; index <value.toString().length; index++) {
      result+="*";

    }

   
     return result;
     
    }else{
      console.log("false"+value);
      return value;
    }

  }

}
