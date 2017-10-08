import { Grid } from "./grid";

export class Cell {
    row: number; //coords
    column: number; //coords
    mined: boolean; //set to true if cell is a mine is 
    flag: boolean; //flag feature 
    color: string; //color for the content of the cell
    minedNeighbors: number; //number of mined neighbors
    status: boolean; //false means closed, true means opened

    constructor(data) {
        this.row = data.row; 
        this.column = data.column;
        this.mined = data.mined; 
        this.flag = false;
        this.color = data.color;
        this.minedNeighbors = data.minedNeighbors || 0;
        this.status = data.status;
    }

}
