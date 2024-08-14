import { Pipe, PipeTransform } from '@angular/core';
import {format, Locale} from "date-fns";

@Pipe({
  name: 'dateCustom',
  standalone: true
})
export class DateCustomPipe implements PipeTransform {

  transform(value: Date, formatDate: string, locale: Locale): string {
    return format(value, formatDate, {locale})
  }

}
