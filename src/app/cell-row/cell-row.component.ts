import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cell-row',
  templateUrl: './cell-row.component.html',
  styleUrls: ['./cell-row.component.css']
})
export class CellRowComponent implements OnChanges {
  @Input() row: number;
  @Output() setCellValue = new EventEmitter<{column: number, row: number, value: string}>();

  @Input()
  set json(json: string) {
    this.initCellValues(json);
  }

  cellValues: string[];

  constructor() {
    this.cellValues = new Array(9);

    for (let i = 0; i < 9; ++i) {
      this.cellValues[i] = '';
    }
   }

   ngOnChanges(changes: SimpleChanges) {
    const json: SimpleChange = changes.json;
    this.initCellValues(json.currentValue);
   }

   private initCellValues(json: string) {
    if (json !== undefined) {
      const boardValues = JSON.parse(json);
      this.cellValues = boardValues[this.row - 1];
    }
   }

  cellUpdateCallback(cellValue: {column: number, value: string}) {
    this.setCellValue.emit({column: cellValue.column, row: this.row, value: cellValue.value})
  }
}
