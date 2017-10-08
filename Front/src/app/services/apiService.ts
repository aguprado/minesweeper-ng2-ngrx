import { Injectable, OnInit } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';

@Injectable()
export class ApiService {

    search: string;
    pageSize: number;
    currentPage: number;

    constructor(private http: Http) {}
    
    // sends the current state to the api by post
    saveGame(game:AppState): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(game);
        let url = 'http://52.67.131.86:8080/game';
        return this.http.post(url, body, options).toPromise()
            .then(response => {
                return response.json();
            }).catch(this.handleError);
        
    }

    //deletes the game by id from the database
    deleteGame(id): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        let url = 'http://52.67.131.86:8080/game?id='+id;
        return this.http.delete(url, options).toPromise()
            .then(response => {
                return response.json();
            }).catch(this.handleError);
    }

    //list all the games in the database
    showGames(): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        let url = 'http://52.67.131.86:8080/games';
        return this.http.get(url, options).toPromise()
            .then(response => {
                return response.json();
            }).catch(this.handleError);
    }
        
    //fetches the game by id from the database
    loadGame(id: string): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        let url = 'http://52.67.131.86:8080/game?id='+id;
        return this.http.get(url, options)
            .toPromise().then(response => {
                return response.json();
            }).catch(this.handleError);
    }

    //rejects the promise if error in the call
    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
