import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { ApiService } from './services/apiService';

@Injectable()
export class Effects {
    constructor(private actions$: Actions, private apiService: ApiService, private store: Store<AppState>) { }
}