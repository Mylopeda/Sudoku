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
    this.json = '[["4","3","6","8","2","9","7","1","5"],["5","1","7","3","4","6","9","8","2"],["2","8","9","1","5","7","6","3","4"],["3","6","4","5","9","2","8","7","1"],["9","7","2","6","8","1","5","4","3"],["1","5","8","4","7","3","2","9","6"],["8","2","3","7","1","5","4","6","9"],["7","9","1","2","6","4","3","5","8"],["6","4","5","9","3","8","1","2","7"]]';
  }

  boardError(errorMsg: string) {
    console.log('Board error:', errorMsg);
    this.boardErrorMsg = errorMsg;
  }
}
