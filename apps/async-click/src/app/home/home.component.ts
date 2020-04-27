import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'async-conditional-click-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  results$: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.results$ = this.http
      .get('https://swapi.py4e.com/api/planets')
      .pipe(map((payload: any) => payload.results));
  }

  showPopularMessage(planet: any) {
    alert('POPULAR -- AAA');
  }

  showNotPopularMessage(planet: any) {
    alert('NOT SO POPULAR -- BBB');
  }

}
