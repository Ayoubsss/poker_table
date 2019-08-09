import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlayersServiceService } from './services/players-service.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { PokerPlayer } from 'src/app/models/pokerplayer';
import { PokerTable } from 'src/app/models/pokertable';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PokerStart';
  public playerList: PokerPlayer[] = [];
  public pokerTables: PokerTable[] = [];
  public selectedTable: number;

  subscription: Subscription;
  subscriptionSelectedTable: Subscription;

  constructor(private playersService: PlayersServiceService) {

    this.pokerTables.push({id: 1, name: 'Table 1'});
    this.pokerTables.push({id: 2, name: 'Table 2'});
    this.pokerTables.push({id: 3, name: 'Table 3'});

  }

  ngOnInit() {

    this.subscriptionSelectedTable = this.playersService.getSelectedTable().subscribe(currentTableId => {
        this.selectedTable = currentTableId;
      }
    );

    this.subscription = this.playersService.getCurrentPlayer().subscribe(currentPlayer => {
        if (currentPlayer) {
          this.playerList.push({
              id: currentPlayer.id,
              playerName: currentPlayer.playerName,
              initialAmount: currentPlayer.initialAmount,
              tableId: this.selectedTable
            }
          );
        }
      });
  }

  addPlayer(playerToAdd: PokerPlayer) {
    this.playersService.addPokerPlayer(playerToAdd);
  }

  deletePlayer(playerToDelete: PokerPlayer) {
    this.playerList = this.playerList.filter(player => player.id !== playerToDelete.id);
  }

 /*  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionSelectedTable.unsubscribe();
  } */

}
