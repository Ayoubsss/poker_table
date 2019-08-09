import { Component, OnInit } from '@angular/core';
import {PokerPlayer} from '../models/pokerplayer';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
  @Input() playerListInput: PokerPlayer[];
  @Output() playerDeleteEvent: EventEmitter<PokerPlayer>;

  constructor() {
    this.playerDeleteEvent = new EventEmitter<PokerPlayer>();
  }

  deletePlayer(playerToDelete: PokerPlayer) {
    this.playerDeleteEvent.emit(playerToDelete);
  }
}
