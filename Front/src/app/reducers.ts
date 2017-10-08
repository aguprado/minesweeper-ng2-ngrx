import { ActionReducer, Action } from '@ngrx/store';
import { Grid } from './models/grid';
import { Cell } from './models/cell';

// defines the app state structure
export interface AppState {
    grid: Grid;
    status: number; // 0: Game Not started, 1: Game in Progress, 2: Game Won, 3: Game Lost
    seconds: number; // time elapsed
    created: number; //miliseconds from 1970 that identifies the game to save & load
}

//sets the inital state of the app
const initialState: AppState = {
    grid: new Grid({mines: 0, rows: 0, columns: 0}),
    status: 0,
    seconds: 0,
    created: 0
};

//defines the constants of possible actions to dispatch
const START_GAME = 'START_GAME';

//defines and exports the actions of possible actions to dispatch
export class StartGameAction implements Action {
    readonly type = START_GAME;
    constructor(public payload: any) { }
}

//here we do most of the logic handling thea app state
export function reducer(state: AppState = initialState, action: Action) {
	switch (action.type) {        
        //when starting the game we set the next state by all the parameters sent in action payload
        case START_GAME:
            return {
                grid: action.payload.grid,
                status: action.payload.status,
                seconds: action.payload.status,
                created: action.payload.created
            };
        default:
			return state;
	}
}