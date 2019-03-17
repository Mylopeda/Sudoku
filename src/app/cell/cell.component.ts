import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() column: number;
  @Input() cellValue: string;
  @Output() setCellValue = new EventEmitter<{column: number, value: string}>();

  constructor() {
    this.cellValue = '';
   }

   evaluateCell() {
     console.log("Evaluating cell with value", this.cellValue);
     this.tellParentRow();
   }

  private tellParentRow() {
    console.log("Telling parent row");
    console.log("Column:", this.column);
    console.log("My cell value:", this.cellValue);
    this.setCellValue.emit({column: this.column, value: this.cellValue});
  }
}
