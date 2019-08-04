import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokerPlayer } from 'src/app/models/pokerplayer';

@Injectable({
  providedIn: 'root'
})
export class PlayersServiceService {

  private currentId: number;
  private currentTable = new Subject<number>();
  private currentPlayer = new Subject<PokerPlayer>();

  constructor() {
    this.currentId = 0;
    this.currentTable.next(1);
  }

  addPokerPlayer(playerToAdd: PokerPlayer) {
    this.currentId += 1;
    this.currentPlayer.next({id: this.currentId, playerName: playerToAdd.playerName, initialAmount: playerToAdd.initialAmount});
  }

  setCurrentTable(selectedTable: number) {
    this.currentTable.next(selectedTable);
  }

  getSelectedTable(): Observable<number> {
    return this.currentTable.asObservable();
  }

  getPlayer(): Observable<PokerPlayer> {
    return this.currentPlayer.asObservable();
  }
}
