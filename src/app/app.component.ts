import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  json: string;
  boardErrorMsg: string;

  ngOnInit() {
    this.title = 'Sudoku';
    this.json = '[["1","1","1","1","1","1","1","1","1"],["2","2","2","2","2","2","2","2","2"],["3","3","3","3","3","3","3","3","3"],["4","4","4","4","4","4","4","4","4"],["5","5","5","5","5","5","5","5","5"],["6","6","6","6","6","6","6","6","6"],["7","7","7","7","7","7","7","7","7"],["8","8","8","8","8","8","8","8","8"],["9","9","9","9","9","9","9","9","9"]]';
  }

  boardError(errorMsg: string) {
    console.log('Board error:', errorMsg);
    this.boardErrorMsg = errorMsg;
  }
}
