import { Cell } from "./cell";

export class Grid {
    cells: Cell[]; //set of cells of the grid
    mines: number; //quantity of mines in the grid
    rows: number; //rows size of the grid
    columns: number; //columns size of the grid

    constructor(data) {
        this.mines = data.mines;
        this.rows = data.rows;
        this.columns = data.columns;
        this.cells = data.cells || [];
    }

}
