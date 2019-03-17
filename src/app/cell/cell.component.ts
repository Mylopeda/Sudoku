import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() column: number;
  @Input() cellValue: string;
  @Output() setCellValue = new EventEmitter<{column: number, value: number}>();

  constructor() {
    this.cellValue = '';
   }

  ngOnInit() {
  }
}
