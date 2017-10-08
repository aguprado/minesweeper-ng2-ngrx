import { Component } from '@angular/core';
import { AppState, StartGameAction } from './reducers';
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
    //sets the observable grid to send to the mines-grid-component
    this.grid = this.store.select('grid') 
  };

  games: any[]; // list of saved games
  grid: Observable<Grid>;  //the observable grid to send to the mines-grid-component
  rows: number = 10; //rows size of the grid
  columns: number = 10; //columns size of the grid
  mines: number = 10; //mines in the grid
  
  startGame = () => {
    //create new grid and dispatch StartGameAction
    let grid = new Grid({rows: this.rows, columns: this.columns, mines: this.mines});
    this.store.dispatch(new StartGameAction({ grid: grid, status: 1, seconds: 0, created: new Date().getTime() }));
  };

}
