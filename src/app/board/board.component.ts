import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnChanges {
  json: string;

  @Input()
  set boardJson(json: string) {
    this.initCellValues(json);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const boardJson: SimpleChange = changes.boardJson;
    this.initCellValues(boardJson.currentValue);
  }

  private initCellValues(json: string) {
    console.log("Board json:", json);
    this.json = json;
  }

  cellUpdateCallback(cellValue: {column: number, row: number, value: string}) {
    console.log("board cellUpdateCallback:", cellValue);
  }
}
