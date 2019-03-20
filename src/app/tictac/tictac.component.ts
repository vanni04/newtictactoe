import { Component, OnInit, Input } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { empty } from 'rxjs';
import { GameService } from '../game.service';
import { Tile } from '../Tile';



enableProdMode();

@Component({
  selector: 'app-tictac',
  templateUrl: './tictac.component.html',
  styleUrls: ['./tictac.component.css']
})
export class TictacComponent implements OnInit {
  constructor(public gs:GameService) {    
  }


  // selectedTile: Tile;
  data : any = [];
  player = "";

  
createGame(){
    this.gs.createGame().subscribe((data: {}) => {
      this.data = data;
      alert(data);
      if(data === "X"){
        alert("X data");
        this.player = "O";
        alert(this.player)
      }
      else if(data === "O"){
        alert("O data");
      }
      else{
        alert("data game has already started");
      }
      console.log(data)

    })
  }
  reset(){
    this.gs.reset().subscribe((data: {}) => {
      this.data = data;
      
      console.log(data)

    })
  }
  

  // createGameBoard(): void{
  //   this.tiles = this.gs.createGameBoard();
  // }

  // onClick(tile: Tile): void{
  //   this.selectedTile = tile;
  // } 


  playGame(){
    this.createGame();
  }


  ngOnInit() {
    // this.createGameBoard();
  }

 
  }

  



