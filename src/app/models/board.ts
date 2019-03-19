export class Board {
    private board: number[][];

    constructor() {
        this.board = [];
    }

    public fromJson(json: string) {
        const tempBoard = JSON.parse(json);

        tempBoard.forEach((rowArray: string[], row: number) => {
            this.board[row] = [];

            rowArray.forEach((value: string, column: number) => {
                this.board[row][column] = parseInt(value, 10);
            });
        });
    }

    public printModel() {
        console.log('Model', this.board);
    }

    public addNumberToCell(column: number, row: number, value: number) {
        row = this.colRowToArrayIndex(row);
        column = this.colRowToArrayIndex(column);

        this.board[row][column] = value;
    }

    public duplicateInColumn(column: number, selfRow: number): boolean {
        column = this.colRowToArrayIndex(column);
        selfRow = this.colRowToArrayIndex(selfRow);

        const selfValue: number = this.board[selfRow][column];
        let duplicateInColumn = false;

        this.board.forEach((element: number[], index: number) => {
            if (index !== selfRow && element[column] === selfValue) {
                duplicateInColumn = true;
            }
        });

        return duplicateInColumn;
    }

    public duplicateInRow(row: number, selfColumn: number): boolean {
        row = this.colRowToArrayIndex(row);
        selfColumn = this.colRowToArrayIndex(selfColumn);

        const selfValue: number = this.board[row][selfColumn];
        let duplicateInRow = false;

        this.board[row].forEach((element: number, index: number) => {
            if (index !== selfColumn && element === selfValue) {
                duplicateInRow = true;
            }
        });

        return duplicateInRow;
    }

    public duplicateInBox(row: number, column: number): boolean {
        const upperLeft = this.getUpperLeftForBox(row, column);

        column = this.colRowToArrayIndex(column);
        row = this.colRowToArrayIndex(row);
        upperLeft.row = this.colRowToArrayIndex(upperLeft.row);
        upperLeft.column = this.colRowToArrayIndex(upperLeft.column);

        const selfValue: number = this.board[row][column];
        let duplicateInBox = false;

        for (let i = upperLeft.row; i < upperLeft.row + 3; ++i) {
            for (let j = upperLeft.column; j < upperLeft.column + 3; ++j) {
                if (i === row && j === column) {
                    continue;
                }

                if (selfValue === this.board[i][j]) {
                    duplicateInBox = true;
                }
            }
        }

        return duplicateInBox;
    }

    private getUpperLeftForBox(row: number, column: number): {row: number, column: number} {
        const upperLeftForBox: {row: number, column: number} = {
            row: this.upperLeftColumnRow(row),
            column: this.upperLeftColumnRow(column)
        };

        return upperLeftForBox;
    }

    private upperLeftColumnRow(inNbr: number): number {
        let outNbr = 0;

        if (inNbr == 1 || inNbr == 4 || inNbr == 7) {
            outNbr = inNbr;
        } else if (inNbr == 2 || inNbr == 5 || inNbr == 8) {
            outNbr = inNbr - 1;
        } else if (inNbr == 3 || inNbr == 6 || inNbr == 9) {
            outNbr = inNbr - 2;
        }

        return outNbr;
    }

    private colRowToArrayIndex(inNbr: number): number {
        return inNbr - 1;
    }
}
