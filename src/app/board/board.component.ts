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

    this.board.addNumberToCell(cellValue.column, cellValue.row, value);

    let message: string = '';

    if (this.board.duplicateInRow(cellValue.row, cellValue.column)) {
      message += ' Duplicate in row';
    }

    if (this.board.duplicateInColumn(cellValue.column, cellValue.row)) {
      message += ' Duplicate in column';
    }

    if (this.board.duplicateInBox(cellValue.row, cellValue.column)) {
      message += ' Duplicate in box';
    }

    this.boardError.emit(message);

    this.board.printModel();
  }
}
