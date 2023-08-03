import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(userDetails: any, greetings:any): any {
    if(userDetails.gender === "male"){
      return `Mr. ${userDetails.name} ${greetings} `
    }else{
      return `Ms. ${userDetails.name} ${greetings} `
    }
  }

}
