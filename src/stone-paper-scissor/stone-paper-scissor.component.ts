import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stone-paper-scissor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './stone-paper-scissor.component.html',
  styleUrl: './stone-paper-scissor.component.css'
})
export class StonePaperScissorComponent {
  options = ['rock', 'paper', 'scissor'];
  userScore = 0;
  compScore = 0;
  userChoice?: string;
  Draw: boolean = false;
  Winmsg?: string;
  Losemsg?: string;
  Drawmsg?: string;
  userWin: boolean | undefined = true;
  gameStarted: boolean = false;


  genCompChoice(): string{
    const index = Math.floor(Math.random()*3);
    return this.options[index];
  }

  showWinner(userWin:boolean, userChoice:string, compChoice:string){
    if(userWin){
      this.userScore++;
      this.Winmsg = `You win! Your ${userChoice} beats ${compChoice}`;
    }else{
      this.compScore++;
      this.Losemsg = `You lost. ${compChoice} beats your ${userChoice}`;
    }
  }

  playGame(user: number){
    this.gameStarted = true;
    this.userChoice = this.options[user];
    const compChoice = this.genCompChoice();
    if(this.userChoice === compChoice){
      this.Draw = true;
      this.userWin = undefined
      this.Drawmsg = `Game was Draw. Play again.`;
    }else{
      this.Draw = false;
      if(this.userChoice == "rock"){
        this.userWin = compChoice == "paper"? false : true;
      }else if(this.userChoice == "paper"){
        this.userWin = compChoice == "scissor"? false : true;
      }else{
        this.userWin = compChoice == "rock"? false : true;
      }
      this.showWinner(this.userWin, this.userChoice, compChoice);
    }

  }
}
