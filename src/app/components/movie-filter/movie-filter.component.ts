import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css',
})
export class MovieFilterComponent {
  private _titleFilter: string = '';
  private _releaseYearFilter: string = '';

  @Output()
  public titleFilterChange = new EventEmitter<string>();

  @Output()
  public releaseYearFilterChange = new EventEmitter<string>();

  public get titleFilter(): string {
    return this._titleFilter;
  }

  public set titleFilter(value: string) {
    this._titleFilter = value;
    this.titleFilterChange.emit(value);
  }

  public get releaseYearFilter(): string {
    return this._releaseYearFilter;
  }

  public set releaseYearFilter(value: string) {
    this._releaseYearFilter = value;
    this.releaseYearFilterChange.emit(value ?? '');
  }
}
