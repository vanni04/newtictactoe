import { Injectable } from '@angular/core';
import { Tile } from './Tile';
import { Player } from './Player';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl:string = "http://localhost:8080/tictactoe";
  tiles = []
  newUrl = "";
  gameKey = "Game Session Id";


  // 
  createGameBoard(){
    this.tiles = [];
      for (var i = 0; i < 9; i++) {
        var tile = new Tile();
        tile.hasValue = false;
        tile.value = "";
        this.tiles.push(tile);
        console.log("Test");
      }
      return this.tiles;
  }
createGame() {
  return this.http.get(this.baseUrl + '/createGame?key=' + this.gameKey, {responseType: 'text'})
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
  
}

reset() {
  return this.http.get(this.baseUrl + '/reset?key=' + this.gameKey, {responseType: 'text'})
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
  
}

getPlayer(id): Observable<Player> {
  return this.http.get<Player>(this.baseUrl + '/createGame?key=' + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  


  constructor(private http : HttpClient) {
    
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
