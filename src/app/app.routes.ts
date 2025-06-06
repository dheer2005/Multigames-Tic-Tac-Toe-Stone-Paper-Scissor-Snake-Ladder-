import { Routes } from '@angular/router';
import { TicTacToeComponent } from '../tic-tac-toe/tic-tac-toe.component';
import { HomeComponent } from '../home/home.component';
import { SnakeLadderComponent } from '../snake-ladder/snake-ladder.component';
import { StonePaperScissorComponent } from '../stone-paper-scissor/stone-paper-scissor.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'tic-tac-toe', component: TicTacToeComponent},
    { path: 'snake-ladder', component: SnakeLadderComponent},
    { path: 'stone-paper-scissor', component: StonePaperScissorComponent}
];
