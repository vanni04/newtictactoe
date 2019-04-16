import { Component, OnInit } from '@angular/core';
import { Tile } from '../Tile';
import { GameService } from '../game.service';
import { Gameboard } from '../Gameboard';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {
// Variables
  tiles : Tile[];
  prevBoardData : any = ":::::::::";
  displayBoard =false;
  tile : any = "X";
  boardStyle = {};
  showBoard = {
    'width': '50%',
    'height':'70vh',
	  'margin-top':'5%',
	  'background-image':'url("board.jpg")',
	  'background-size': '100% 100%',
    'background-repeat': 'no-repeat',
    'border':'10px solid #303030',
    'margin-left': '23%'
  }
  hideBoard = { 
    'background-image':'url("X.png")',
    'width': '50%',
    'height':'70vh',
	  'margin-top':'5%',
	  'background-size': '100% 100%',
    'background-repeat': 'no-repeat',
    'margin-left': '23%'
  }

  createGameBoard(){
    this.tiles = [];
      for (var i = 0; i < 9; i++) {
        var tile = new Tile();
        tile.hasValue = false;
        tile.id = i;
        this.tiles.push(tile);
        console.log(tile.id);
      }
      return this.tiles;
  }


  move(id, tile){
    let moveData : any;
    this.gs.move(id, tile).subscribe((data: {})  => {
      moveData = data;
      console.log(moveData + "data");
      this.prevBoardData = data;

    })
  }

     playGame(tile : Tile) : void{
       let playgameData : any;
      this.gs.createGame().subscribe((data: {}) => {
        playgameData = data;
        if(data === "X" || data === "O"){
          this.createGameBoard();
           this.boardStyle = this.showBoard;
        // alert(data);
         this.tile =data;
        if(data === "X"){
          console.log("X data");
          this.displayBoard = true;   
        }
        else if(data === "O"){
          
          console.log("O data");
          this.displayBoard = true;
          }
      }
        else{
          console.log("data game has already started");
          this.boardStyle = this.hideBoard;
        }
        
      })
    }

    checkBoard(tile : Tile){
      
      this.gs.checkBoard().subscribe((data: {})  => {
      
        console.log(data + " board data");
        if (this.prevBoardData != data && data != "GAME NOT YET STARTED") {
          this.prevBoardData = data;

          let board = this.prevBoardData.split(":");
          var squareDiv;
          for (var i = 0; i < board.length - 1; i++) {
              squareDiv = this.tile.value;
              if (board[i] == "X") {
                  tile.xtile = true;
                  tile.ytile = false;
              } else if (board[i] == "O") {
                  tile.xtile = false;
                  tile.ytile = true;
  
              }
              // squareDiv.attr("move", board[i]);
          }
      }
  
      })
    }

  onClick(tile: Tile): void{
      
      if(this.tile=== "X" && tile.clicked === false){
        this.checkBoard(tile);
        tile.xtile = true;
        tile.ytile = false;
        this.tile = "O";
        tile.clicked = true;
        this.move(tile.id, this.tile);
      }
      else if(this.tile === "O" && tile.clicked === false){
        this.checkBoard(tile);
        tile.ytile = true;
        tile.xtile = false;
        this.tile = "X";
        tile.clicked = true;
        this.move(tile.id, this.tile);
      }
      else{
        // alert("data game has already started");
      }
  } 
 


  reset(){
    let resetData : any;
    this.gs.reset().subscribe((data: {}) => {
      resetData = data;
      console.log(resetData)

    })
  }

  
constructor(public gs:GameService) { }


  ngOnInit() {
  }

}
