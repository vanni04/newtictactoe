import { Component, OnInit } from '@angular/core';
import { Tile } from '../Tile';
import { GameService } from '../game.service';


@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {
// Variables
  tiles : Tile[];
  selectedTile: Tile;
  // image = "background.jpg";
  image = "";
  notclicked : boolean = false;


  onClick(tile: Tile): void{
   this.notclicked = !this.notclicked;
    this.selectedTile = tile;
    this.selectedTile.value = "O";
    // $(this).html("<img src='X.png' height=100%; width=100% />");
    // console.log(this.selectedTile.value);
    // this.image = "background.jpg";
  } 
  createGameBoard(): void{
    this.tiles = this.gs.createGameBoard();
  }



constructor(public gs:GameService) { }


  ngOnInit() {
    this.createGameBoard();
  }

}
