import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlayersServiceService } from './services/players-service.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { PokerPlayer } from 'src/app/models/pokerplayer';
import { PokerTable } from 'src/app/models/pokertable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'PokerStart';
  private playerList: PokerPlayer[] = [];
  private pokerTables: PokerTable[] = [];
  private selectedTable: number;

  subscription: Subscription;
  subscriptionSelectedTable: Subscription;

  constructor(playersService: PlayersServiceService) {

    this.pokerTables.push({id: 1, name: 'Table 1'});
    this.pokerTables.push({id: 2, name: 'Table 2'});
    this.pokerTables.push({id: 3, name: 'Table 3'});

    this.subscriptionSelectedTable = playersService.getSelectedTable().subscribe(currentTableId => {
        this.selectedTable = currentTableId;
      }
    );

    this.subscription = playersService.getPlayer().subscribe(currentPlayer => {

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionSelectedTable.unsubscribe();
  }

}
