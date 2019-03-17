export class Board {
    private board: number[][];

    constructor() {
        this.board = [];
    }

    public duplicateInColumn(column: number, selfRow: number): boolean {
        const selfValue: number = this.board[column][selfRow];
        let duplicateInColumn = false;

        this.board[column].forEach((value: number, index: number) => {
            if (index !== selfRow && value === selfValue) {
                duplicateInColumn = true;
            }
        });

        return duplicateInColumn;
    }

    public duplicateInRow(row: number, selfColumn: number): boolean {
        const selfValue: number = this.board[selfColumn][row];
        let duplicateInRow = false;

        this.board.forEach((element: number[], index: number) => {
            if (index !== selfColumn && element[row] === selfValue) {
                duplicateInRow = true;
            }
        });

        return duplicateInRow;
    }

    public duplicateInBox(row: number, column: number): boolean {
        const selfValue: number = this.board[column][row];
        let duplicateInBox = false;


        return duplicateInBox;
    }

    private getUpperLeftForBox(row: number, column: number): number[] {
        let upperLeftForBox: number[] = [];

        

        return upperLeftForBox;
    }
}
