import { Component, OnInit } from '@angular/core';
import { PokerPlayer } from 'src/app/models/pokerplayer';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { PlayersServiceService } from '../services/players-service.service';

@Component({
  selector: 'app-pokertable',
  templateUrl: './pokertable.component.html',
  styleUrls: ['./pokertable.component.scss']
})
export class PokertableComponent  {

  private _playerListTableInput = [];

  constructor(private playersService: PlayersServiceService) {}

  @Input() private tableId = 1;
  
  @Input() private tableName;

  @Input()
  set playerListTableInput(playerListTableInput: PokerPlayer[]) {
    this._playerListTableInput = playerListTableInput;
  }

  get playerListTableInput(): PokerPlayer[] { return this._playerListTableInput.filter(player => player.tableId === this.tableId); }

  selectTable() {
    this.playersService.setCurrentTable(this.tableId);
  }

}
