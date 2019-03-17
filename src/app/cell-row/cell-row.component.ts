import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell-row',
  templateUrl: './cell-row.component.html',
  styleUrls: ['./cell-row.component.css']
})
export class CellRowComponent implements OnInit {
  @Input() row: number;
  @Output() setCellValue = new EventEmitter<{column: number, row: number, value: number}>();

  constructor() { }

  ngOnInit() {
  }
}
