class Solution {
    public boolean isValidSudoku(char[][] board) {

         for (int row = 0; row < 9; row++) {
        for (int col = 0; col < 9; col++) {

            if (board[row][col] == '.') {
                continue;
            }

            char current = board[row][col];

            // Check row
            for (int c = 0; c < 9; c++) {
                if (c != col && board[row][c] == current) {
                    return false;
                }
            }

            // Check column
            for (int r = 0; r < 9; r++) {
                if (r != row && board[r][col] == current) {
                    return false;
                }
            }

            // Check 3x3 box
            int startRow = (row / 3) * 3;
            int startCol = (col / 3) * 3;

            for (int r = startRow; r < startRow + 3; r++) {
                for (int c = startCol; c < startCol + 3; c++) {

                    if ((r != row || c != col)
                            && board[r][c] == current) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
        
    }
}
