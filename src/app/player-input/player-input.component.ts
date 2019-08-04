import { Component, OnInit } from '@angular/core';
import { PokerPlayer } from '../models/pokerplayer';
import { PlayersServiceService } from '../services/players-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.scss']
})
export class PlayerInputComponent implements OnDestroy {

  playerInput: PokerPlayer;
  private selectedTable: number;

  subscriptionSelectedTable: Subscription;


  constructor(private playersService: PlayersServiceService) {
    this.playerInput = {playerName: '', initialAmount: 0};

    this.subscriptionSelectedTable = playersService.getSelectedTable().subscribe(currentTableId => {
        this.selectedTable = currentTableId;
      }
    );
   }

 ngOnDestroy() {
    this.subscriptionSelectedTable.unsubscribe();
  }

  addPlayerToList() {
    this.playersService.addPokerPlayer(this.playerInput);
    this.playerInput = {playerName: '', initialAmount: 0};
  }

}
