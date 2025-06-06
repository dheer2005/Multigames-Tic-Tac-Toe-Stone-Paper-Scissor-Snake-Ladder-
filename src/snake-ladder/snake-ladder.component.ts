import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix }
  from '@fortawesome/free-solid-svg-icons';
import { playersInfo } from '../Model/playerInfoModel.Model';

@Component({
  selector: 'app-snake-ladder',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './snake-ladder.component.html',
  styleUrl: './snake-ladder.component.css'
})
export class SnakeLadderComponent {
  diceFaces = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
  currentFace1 = faDiceOne;
  isRolling1 = false;
  currentFace2 = faDiceOne;
  isRolling2 = false;
  count: number = 1;
  board: any[][] = [];
  arr: number[] = [];
  player1 = 0;
  player2 = 0;
  turnPlayer1 = true;
  turnPlayer2 = false;
  turnComputer = false;
  gameStarted: boolean = false;
  Info?: playersInfo;
  user1: string = '';
  user2: string = '';
  withPlayer: boolean = false;
  withComputer: boolean = false;


  constructor() {
    for (let i = 0; i < 10; i++) {
      this.arr = [];
      if (i % 2 === 0) {
        for (let j = 0; j < 10; j++) {
          this.arr.push(this.count++);
        }
      } else {
        for (let j = 0; j < 10; j++) {
          this.arr.unshift(this.count++);
        }
      }
      this.board.unshift(this.arr);
    }
  }

  startGame(form: NgForm) {
    this.Info = {
      user1: this.user1,
      user2: this.user2
    }
    this.gameStarted = true;
    form.reset();
  }

  startGameWithComputer(form: NgForm) {
    this.gameStarted = true;
    this.withComputer = true;
  }


  getSquareColor(row: number, col: number): string {
    return (row + col) % 2 === 0 ? 'white' : 'black';
  }

  reset() {
    this.player1 = 0;
    this.player2 = 0;
    this.currentFace1 = faDiceOne;
    this.currentFace2 = faDiceOne;
    this.turnPlayer1 = true;
    this.turnPlayer2 = false;
  }

  rollDice1() {
    if (this.turnPlayer1) {
      if (this.isRolling1) return;
      this.isRolling1 = true;
      
      this.turnPlayer1 = false;
      this.turnPlayer2 = true;
      this.turnComputer = true;
      
      setTimeout( () => {
        const randomNumber = Math.floor(Math.random() * 6);
        this.currentFace1 = this.diceFaces[randomNumber];
        this.isRolling1 = false;
        if (this.player1 + randomNumber + 1 <= 100) {
          this.player1 += randomNumber + 1;
          
          if (this.currentFace1 == faDiceSix) {
            this.turnPlayer1 = true;
            this.turnPlayer2 = false;
            this.turnComputer = false;
          }

          if (this.player1 == 100) {
            alert("Player 1 wins");
            this.player1 = 0;
            this.player2 = 0;
            this.currentFace1 = faDiceOne;
            this.currentFace2 = faDiceOne;
            this.turnPlayer1 = true;
            this.turnPlayer2 = false;
            return;
          }

          switch (this.player1) {
            case 16:
              setTimeout(() => {
                this.player1 = 35;
              }, 500);
              break;
            case 28:
              setTimeout(() => {
                this.player1 = 15;
              }, 500);
              break;
            case 32:
              setTimeout(() => {
                this.player1 = 50;
              }, 500);
              break;
            case 39:
              setTimeout(() => {
                this.player1 = 4;
              }, 500);
              break;
            case 47:
              setTimeout(() => {
                this.player1 = 76;
              }, 500);
              break;
            case 55:
              setTimeout(() => {
                this.player1 = 33;
              }, 500);
              break;
            case 62:
              setTimeout(() => {
                this.player1 = 84;
              }, 500);
              break;
            case 72:
              setTimeout(() => {
                this.player1 = 67;
              }, 500);
              break;
            case 73:
              setTimeout(() => {
                this.player1 = 92;
              }, 500);
              break;
            case 99:
              setTimeout(() => {
                this.player1 = 37;
              }, 500);
              break;
          }
        }
      }, 1000);
    }
    if(!this.turnPlayer1){
      console.log("before roll computer",this.turnPlayer1)
      setTimeout(() => {
        if (this.withComputer && this.turnComputer) {
          this.rollComputer();
        }
      }, 1500);
    }
  }

  rollDice2() {
    if (this.turnPlayer2) {

      if (this.isRolling2) return;
      this.isRolling2 = true;
      setTimeout(() => {

        const randomNumber = Math.floor(Math.random() * 6);
        this.currentFace2 = this.diceFaces[randomNumber];

        this.isRolling2 = false;
        if (this.player2 + randomNumber + 1 <= 100) {
          this.player2 += randomNumber + 1;
          this.turnPlayer1 = true;
          this.turnPlayer2 = false;
          if (this.currentFace2 == faDiceSix) {
            this.turnPlayer1 = false;
            this.turnPlayer2 = true;
          }
          if (this.player2 == 100) {
            alert("Player2 wins");
            this.player1 = 0;
            this.player2 = 0;
            this.currentFace1 = faDiceOne;
            this.currentFace2 = faDiceOne;
            this.turnPlayer1 = true;
            this.turnPlayer2 = false;
          }

          switch (this.player2) {
            case 16:
              setTimeout(() => {
                this.player2 = 35;
              }, 500);
              break;
            case 28:
              setTimeout(() => {
                this.player2 = 15;
              }, 500);
              break;
            case 32:
              setTimeout(() => {
                this.player2 = 50;
              }, 500);
              break;
            case 39:
              setTimeout(() => {
                this.player2 = 4;
              }, 500);
              break;
            case 47:
              setTimeout(() => {
                this.player2 = 76;
              }, 500);
              break;
            case 55:
              setTimeout(() => {
                this.player2 = 33;
              }, 500);
              break;
            case 62:
              setTimeout(() => {
                this.player2 = 84;
              }, 500);
              break;
            case 72:
              setTimeout(() => {
                this.player2 = 67;
              }, 500);
              break;
            case 73:
              setTimeout(() => {
                this.player2 = 92;
              }, 500);
              break;
            case 99:
              setTimeout(() => {
                this.player2 = 37;
              }, 500);
              break;
          }
        }
      }, 1500);
    }
  }

  rollComputer() {
    console.log("computer", this.turnComputer);
    if (this.turnComputer) {
      if (this.isRolling2) return;
      this.isRolling2 = true;
      
      setTimeout(async () => {

        const randomNumber = Math.floor(Math.random() * 6);
        this.currentFace2 = this.diceFaces[randomNumber];

        this.isRolling2 = false;
        if (this.player2 + randomNumber + 1 <= 100) {
          this.player2 += randomNumber + 1;

          this.turnPlayer1 = true;
          this.turnComputer = false;

          if (this.currentFace2 == faDiceSix) {
            this.turnPlayer1 = false;
            this.turnComputer = true;
            setTimeout(() => {
              this.rollComputer();
            }, 1000);
          }
          
          if (this.player2 == 100) {
            alert("Player2 wins");
            this.player1 = 0;
            this.player2 = 0;
            this.currentFace1 = faDiceOne;
            this.currentFace2 = faDiceOne;
            this.turnPlayer1 = true;
            this.turnPlayer2 = false;
          }

          switch (this.player2) {
            case 16:
              setTimeout(() => {
                this.player2 = 35;
              }, 500);
              break;
            case 28:
              setTimeout(() => {
                this.player2 = 15;
              }, 500);
              break;
            case 32:
              setTimeout(() => {
                this.player2 = 50;
              }, 500);
              break;
            case 39:
              setTimeout(() => {
                this.player2 = 4;
              }, 500);
              break;
            case 47:
              setTimeout(() => {
                this.player2 = 76;
              }, 500);
              break;
            case 55:
              setTimeout(() => {
                this.player2 = 33;
              }, 500);
              break;
            case 62:
              setTimeout(() => {
                this.player2 = 84;
              }, 500);
              break;
            case 72:
              setTimeout(() => {
                this.player2 = 67;
              }, 500);
              break;
            case 73:
              setTimeout(() => {
                this.player2 = 92;
              }, 500);
              break;
            case 99:
              setTimeout(() => {
                this.player2 = 37;
              }, 500);
              break;
          }
        }
      }, 1500);
    }
  }
}