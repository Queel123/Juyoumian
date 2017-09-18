//在support.js中
document_width = window.screen.availWidth;  //屏幕宽度
grid_container_width = 0.92 * document_width;   //期盘宽度
cell_side_length = 0.18 * document_width;   //格子的大小
cell_space = 0.04 * document_width; //格子之间的间隔

//获得相应格子距离期盘顶部的距离
function get_pos_top(i, j) {
    return cell_space + i * (cell_space + cell_side_length);
}

//获得相应格子距离棋盘左边的距离
function get_pos_left(i, j) {
    return cell_space + j * (cell_space + cell_side_length);
}

//获得相应数字的背景色
function get_number_background_color(number) {
    switch (number) {
        case 2: return '#eee4da'; break;
        case 4: return '#ede0c8'; break;
        case 8: return '#f2b179'; break;
        case 16: return '#f59563'; break;
        case 32: return '#f67c5f'; break;
        case 64: return '#f65e3b'; break;
        case 128: return '#edcf72'; break;
        case 256: return '#edcc61'; break;
        case 512: return '#9c0'; break;
        case 1024: return '#33b5e5'; break;
        case 2048: return '#09c'; break;
        case 4096: return '#a6c'; break;
        case 8192: return '#93c'; break;
    }
    return 'black';
}
function get_number_background_img(number) {
    switch (number) {
        case 2: return "url(images/picture1.png)"; break;
        case 4: return "url(images/picture2.png)"; break;
        case 8: return "url(images/picture3.png)"; break;
        case 16: return "url(images/picture4.png)"; break;
        case 32: return "url(images/picture5.png)"; break;
        case 64: return "url(images/picture6.png)"; break;
        case 128: return "url(images/picture7.png)"; break;
        case 256: return "url(images/picture8.png)"; break;
        case 512: return "url(images/picture9.jpg)"; break;
        case 1024: return "url(images/picture10.jpg)"; break;
        case 2048: return "url(images/picture11.jpg)"; break;
        case 4096: return "url(images/picture12.jpg)"; break;
        case 8192: return "url(images/picture13.jpg)"; break;
    }
    return 'black';
}
//获得相应数字的颜色
function get_number_color(number) {
    if (number <= 4)
        return '#776e65';
    return 'white';
}

//判断棋盘上是否还有空格子
function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}
//在support.js中加入
//判断是否能向左移动
function can_move_left(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i][j - 1] == 0 || board[i][j] == board[i][j - 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//判断是否能向右移动
function can_move_right(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j] == board[i][j + 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//判断是否能向上移动
function can_move_up(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//判断是否能向下移动
function can_move_down(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//判断水平方向上时候是否有空格子
function no_block_horizontal(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}

//判断垂直方向上时候是否有空格子
function no_block_vertical(col, row1, row2, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0) {
            return false;
        }
    }
    return true;
}

//判断是否还能移动
function nomove(board) {
    if (can_move_down(board) || can_move_up(board) || can_move_right(board) || can_move_left(board)) {
        return false;
    }
    return true;
}