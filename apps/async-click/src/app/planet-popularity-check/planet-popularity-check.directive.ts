import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanetPopularityCheckDialogComponent } from '../planet-popularity-check-dialog/planet-popularity-check-dialog.component';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[planetPopularityCheck]'
})
export class PlanetPopularityCheckDirective {

  @Input('planetPopularityCheck') planet: any;
  @Output() clickIfPopular = new EventEmitter<any>();
  @Output() clickIfNotPopular = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  @HostListener('click')
  clickEvent() {
    // Show loading indicator
    this
      .dialog
      .open(PlanetPopularityCheckDialogComponent, {
        width: '250px',
        data: this.planet
      })
      .afterClosed()
      .subscribe(result => {
        if (result.films.length >= 3) {
          this.clickIfPopular.emit(result);
        } else {
          this.clickIfNotPopular.emit(result);
        }
      });
  }
}
