import { Component } from '@angular/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { Grid } from './models/grid';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './services/apiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private apiService: ApiService, private store: Store<AppState>) { 
  };

}
