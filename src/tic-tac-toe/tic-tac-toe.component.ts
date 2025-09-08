import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {

  constructor(private router: Router){}

  board: string[] = Array(9).fill('');
  turnO = true;
  winnerMessage: string = '';
  showResult = false;
  withComputer: boolean = false;
  gameStarted: boolean = false;
  notSelected: boolean = true;
  computerIndex!: number | undefined ;




  winningPattern: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  handleClick(index: number | undefined): void {
    if(index == undefined) return;
    if (this.board[index] !== '' || this.showResult) {
      return;
    }
      this.board[index] = this.turnO ? 'O': 'X';
      this.turnO = !this.turnO;
      this.checkWinner();

    if(!this.turnO && this.withComputer){
      setTimeout(() => {
        this.computer();
      }, 1000);
    }
    
  }

  checkWinner(): void {
    for (const pattern of this.winningPattern) {
      const [a, b, c] = pattern;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[b] === this.board[c]
      ) {
        this.winnerMessage = `Player ${this.board[a]} is winner`;
        this.showResult = true;
        return;
      }
    }

    if (!this.board.includes('')) {
      this.winnerMessage = 'Match draw';
      this.showResult = true;
    }
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.turnO = true;
    this.winnerMessage = '';
    this.showResult = false;
    this.computerIndex 
  }

  startWithComputer(){
    this.gameStarted = true;
    this.withComputer = true;
  }

  startGame(){
    this.gameStarted = true;
  }

  computer(){
    this.computerIndex = undefined;
    for(const pattern of this.winningPattern){
      const [a,b,c] = pattern;
      if(this.board[a] == 'X' && this.board[b] == 'X' && this.board[c] == '' ){
        this.computerIndex = c;
        break;
      }else if(this.board[a] == 'X' && this.board[b] == '' && this.board[c] == 'X' && this.board[b] == ''){
        this.computerIndex = b;
        break;
      }else if(this.board[a] == '' && this.board[b] == 'X' && this.board[c] == 'X'){
        this.computerIndex = a;
        break;
      }
    }

    if(this.computerIndex === undefined){
      for(const pattern of this.winningPattern){
        const [a,b,c] = pattern;
        if (this.board[a] == 'O' && this.board[b] == 'O' && this.board[c] == '' ){
          this.computerIndex = c;
          break;
        }else if(this.board[a] == 'O' && this.board[c] == 'O' && this.board[b] == ''){
          this.computerIndex = b;
          break;
        }else if(this.board[b] == 'O' && this.board[c] == 'O' && this.board[a] == ''){
          this.computerIndex = a;
          break;
        }
      }
    }
    

    if(this.board.includes('') && this.computerIndex == undefined ){
      for(const pattern of this.winningPattern){
        const [a,b,c] = pattern;
        if(this.board[a] == 'X' && this.board[b] == '' && this.board[c] == '' ){
          this.computerIndex = b;
        }else if(this.board[a] == '' && this.board[b] == 'X' && this.board[c] == '' ){
          this.computerIndex = c;
        } if(this.board[a] == '' && this.board[b] == '' && this.board[c] == 'X' ){
          this.computerIndex = a;
        }
      }
    }
    
    if(this.board.includes('') && this.computerIndex == undefined ){
      while(true){
        const rowNumber = Math.floor(Math.random()*3);
        const colNumber = Math.floor(Math.random()*3);
        this.computerIndex = rowNumber*3 + colNumber;
        if(this.board[this.computerIndex] == ''){
          break;
        }else{
          this.computerIndex = undefined;
        }
      }
    }
    if(this.computerIndex!==undefined){
      this.handleClick(this.computerIndex);
    }
  }
}
