import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationMovie',
  standalone: true,
})
export class DurationMoviePipe implements PipeTransform {
  transform(value: number): string {
    const hour = Math.floor(value / 60);
    const minutes = value - hour * 60;
    return `${hour}h ${minutes}min`;
  }
}
