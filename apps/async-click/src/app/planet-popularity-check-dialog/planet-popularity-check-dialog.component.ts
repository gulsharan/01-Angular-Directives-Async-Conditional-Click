import { delay } from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'async-conditional-click-planet-popularity-check-dialog',
  templateUrl: './planet-popularity-check-dialog.component.html',
  styleUrls: ['./planet-popularity-check-dialog.component.scss']
})
export class PlanetPopularityCheckDialogComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<PlanetPopularityCheckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public planet: any
  ) { }

  ngOnInit(): void {
    // Load Planet Details
    this.http
      .get(this.planet.url)
      .pipe(delay(1000))
      .subscribe((payload: any) => {
        this.dialogRef.close(payload);
      });
  }

}
