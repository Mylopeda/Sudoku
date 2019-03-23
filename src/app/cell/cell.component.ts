import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnChanges {
  @Input() column: number;
  @Output() setCellValue = new EventEmitter<{column: number, value: string}>();
  
  @Input()
  set cellValue(value) {
    this.initCellValue(value);
  }

  value: string;
  cellDisabled: boolean;

  constructor() {
    this.value = '';
    this.cellDisabled = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    const cellValue: SimpleChange = changes.cellValue;
    this.initCellValue(cellValue.currentValue);
  }

   evaluateCell() {
     this.tellParentRow();
   }

  private initCellValue(value: string) {
    this.value = value;

    if (value === '') {
      this.cellDisabled = false;
    } else {
      this.cellDisabled = true;
    }
  }

  private tellParentRow() {
    this.setCellValue.emit({column: this.column, value: this.value});
  }
}
