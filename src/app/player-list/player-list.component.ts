import { Component, OnInit } from '@angular/core';
import {PokerPlayer} from '../models/pokerplayer';
import { Input } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
  @Input() playerListInput: PokerPlayer[];
}
