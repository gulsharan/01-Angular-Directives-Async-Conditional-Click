import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PlanetPopularityCheckDirective } from './planet-popularity-check/planet-popularity-check.directive';
import { PlanetPopularityCheckDialogComponent } from './planet-popularity-check-dialog/planet-popularity-check-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [AppComponent, HomeComponent, PlanetPopularityCheckDirective, PlanetPopularityCheckDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlanetPopularityCheckDialogComponent]
})
export class AppModule {}
