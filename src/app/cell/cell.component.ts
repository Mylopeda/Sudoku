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
     this.tellParentRow();
   }

  private tellParentRow() {
    this.setCellValue.emit({column: this.column, value: this.cellValue});
  }
}
