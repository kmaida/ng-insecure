import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccformat'
})
export class CcformatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const num = value.toString();
    if (args === 'amex') {
      return num.replace(/\b(\d{4})(\d{6})(\d{5})\b/, '$1 $2 $3');
    }
    return num.replace(/(.{4})/g, '$1 ');
  }

}
