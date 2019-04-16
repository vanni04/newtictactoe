import { Component, OnInit, Input } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { empty } from 'rxjs';
import { GameService } from '../game.service';
import { Tile } from '../Tile';
import { Gameboard } from '../Gameboard';



enableProdMode();

@Component({
  selector: 'app-tictac',
  templateUrl: './tictac.component.html',
  styleUrls: ['./tictac.component.css']
})
export class TictacComponent implements OnInit {
  constructor(public gs:GameService) {    
  }


  selectedTile: Tile;
  data : any = [];
  player = "";
  showTile : boolean = false;

  boardStyle = {};
  showBoard = {
    'width': '50%',
    'height':'70vh',
	  'margin-top':'5%',
	  'background-image':'url("src/images/board.jpg " )',
	  'background-size': '100% 100%',
    'background-repeat': 'no-repeat',
    'border':'10px solid #303030',
    'margin-left': '23%'
  }

  // playGame(){
  //   this.gs.createGame().subscribe((data: {}) => {
  //     this.data = data;
      
  //     // alert(data);
  //     if(data === "X"){
  //       console.log("X data");
  //       this.boardStyle = this.showBoard;
  //     }
  //     else if(data === "O"){
  //       console.log("O data");
  //       this.boardStyle = this.showBoard;
  //     }
  //     else{
  //       console.log("data game has already started");

  //       this.boardStyle = { 'display' : 'block'};
  //     }
      
  //   })
  // }




  reset(){
    this.gs.reset().subscribe((data: {}) => {
      this.data = data;
      console.log(data)

    })
  }
  

  // createGameBoard(): void{
  //   this.tiles = this.gs.createGameBoard();
  // }

  ngOnInit() {
    // this.playGame();
    // this.createGameBoard();
  }

 
  }

  



