import { Component, OnInit } from '@angular/core';
import { PokerPlayer } from '../models/pokerplayer';
import { PlayersServiceService } from '../services/players-service.service';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.scss']
})
export class PlayerInputComponent {

  playerInput: PokerPlayer;
  public selectedTable: number;

  subscriptionSelectedTable: Subscription;

  @Output() addPlayerEvent: EventEmitter<PokerPlayer>;


  constructor(private playersService: PlayersServiceService) {
    this.addPlayerEvent = new EventEmitter<PokerPlayer>();
    this.playerInput = {playerName: '', initialAmount: 0};

    this.subscriptionSelectedTable = playersService.getSelectedTable().subscribe(currentTableId => {
        this.selectedTable = currentTableId;
      }
    );
  }

  addPlayerToList() {
    this.addPlayerEvent.emit(this.playerInput);
    this.playerInput = {playerName: '', initialAmount: 0};
  }

}
