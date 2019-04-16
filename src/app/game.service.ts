import { Injectable } from '@angular/core';
import { Tile } from './Tile';
import { Player } from './Player';
import { Gameboard } from './Gameboard';
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
  tile : any;
  

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

move(id , tile){
  let i = id;
  let possibleCoordinates = "0,0;0,1;0,2;1,0;1,1;1,2;2,0;2,1;2,2";
  let coordinates = possibleCoordinates.split(";");
  let coordinatesXY = coordinates[i].split(",");
  let  x = parseInt(coordinatesXY[1]);
  let y = parseInt(coordinatesXY[0]);
  return this.http.get(this.baseUrl + '/move?key=' + this.gameKey +  "&tile=" + tile + "&y=" + y + "&x=" + x, {responseType: 'text'})
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


checkBoard(){
  return this.http.get(this.baseUrl + '/board?key=' + this.gameKey, {responseType: 'text'})
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
