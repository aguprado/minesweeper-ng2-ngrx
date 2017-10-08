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

  constructor(private store: Store<AppState>, private apiService: ApiService) { };
  
  @Input() grid:Grid;

  ngOnInit() {
  }

}
