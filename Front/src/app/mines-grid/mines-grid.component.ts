import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Grid } from '../models/grid';
import { Cell } from '../models/cell';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'mines-grid',
  templateUrl: './mines-grid.component.html',
  styleUrls: ['./mines-grid.component.css']
})

export class MinesGridComponent implements OnInit{

  created: number;
  seconds: number = 0;
  status: number = 0;
  interval = null;

  constructor(private store: Store<AppState>, private apiService: ApiService) { };
  
  @Input() grid:Grid;

  ngOnInit() {
    //subscribe to created observable to update when loaded or stated game
    this.store.select('created').subscribe((created: number) => { this.created = created; this.seconds = 0 });
    //subscribe to created seconds to update when loaded game
    this.store.select('seconds').subscribe((seconds: number) => { this.seconds = seconds });
    //subscribe to status to handle the interval
    this.store.select('status').subscribe((status: number) => {
      this.status = status;
      if (status == 1) { this.interval = setInterval(() => { this.seconds += 1 }, 1000) }
      else { clearInterval(this.interval) };
    });
  }

}
