import { Component, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnChanges {
  board: Board;
  json: string;

  @Output() gameIsWon = new EventEmitter<boolean>();

  @Output() boardError = new EventEmitter<string>();

  @Input()
  set boardJson(json: string) {
    this.initCellValues(json);
  }

  constructor() {
    this.board = new Board();
   }

  ngOnChanges(changes: SimpleChanges) {
    const boardJson: SimpleChange = changes.boardJson;
    this.initCellValues(boardJson.currentValue);
  }

  private initCellValues(json: string) {
    this.board.fromJson(json);
    this.json = json;
  }

  cellUpdateCallback(cellValue: {column: number, row: number, value: string}) {
    let value = -1;

    if (cellValue.value !== '') {
      value = parseInt(cellValue.value, 10);
    }

    let errorMessage = '';

    if (value > 0 && value < 10) {
      this.board.addNumberToCell(cellValue.column, cellValue.row, value);

      if (this.board.duplicateInRow(cellValue.row, cellValue.column)) {
        errorMessage += ' Duplicate in row';
      }

      if (this.board.duplicateInColumn(cellValue.column, cellValue.row)) {
        errorMessage += ' Duplicate in column';
      }

      if (this.board.duplicateInBox(cellValue.row, cellValue.column)) {
        errorMessage += ' Duplicate in box';
      }
    } else if (value === -1) {
      this.board.addNumberToCell(cellValue.column, cellValue.row, -1);
    } else {
      errorMessage = 'Number is not 1-9';
      this.board.addNumberToCell(cellValue.column, cellValue.row, -1);
    }

    if (errorMessage === '') {
      const gameIsWon = this.board.gameIsWon();
      console.log('Game is won:', gameIsWon);

      this.gameIsWon.emit(gameIsWon);
    } else {
      console.log('Board has an error');
    }

    this.boardError.emit(errorMessage);
    this.board.printModel();
  }
}
