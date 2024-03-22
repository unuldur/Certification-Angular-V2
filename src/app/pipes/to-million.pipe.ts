import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMillion',
  standalone: true,
})
export class toMillionPipe implements PipeTransform {
  transform(value: string): string {
    return `$${value} million`;
  }
}
