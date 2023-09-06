const board = document.querySelector(".com-board");
let currentPlayer = "🐢";
let gameOver = false;

function createCell() {
    const cell = document.createElement("div");
    cell.classList.add("com-cell");
    cell.addEventListener("click", () => handleCellClick(cell));
    return cell;
}

function handleCellClick(cell) {
    if (cell.textContent || gameOver) return;

    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "🐔" ? "🐢" : "🐔";

    checkWinner();

    if (!gameOver && currentPlayer === "🐢") {
        webPlay(); // La web juega automáticamente después del usuario.
        checkWinner();
    }
}

function checkWinner() {
    const cells = document.querySelectorAll(".com-cell");
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameOver = true;
            mostrarResultado(`${cells[a].textContent} wins!`);
            return;
        }
    }

    if ([...cells].every((cell) => cell.textContent)) {
        gameOver = true;
        mostrarResultado("¡Empate técnico!");
    }
}

function webPlay() {
    const cells = document.querySelectorAll(".com-cell");
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].textContent) {
            // Simulate the computer's move (player "🐢")
            cells[i].textContent = "🐢";
            currentPlayer = "🐔";
            
            // Check if the computer won with this move
            if (checkWinningMove(cells[i])) {
                mostrarResultado("¡La computadora ha ganado!");
            }
            
            return;
        }
    }
}

function checkWinningMove(cell) {
    // Copy the current board
    const cells = document.querySelectorAll(".com-cell");
    const boardCopy = [...cells].map((cell) => cell.textContent);
    
    // Get the index of the clicked cell
    const index = Array.from(cells).indexOf(cell);
    
    // Mark the cell on the copied board
    boardCopy[index] = "🐢";
    
    // Check if this move is a winning move for the computer
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (boardCopy[a] === "🐢" && boardCopy[b] === "🐢" && boardCopy[c] === "🐢") {
            return true;
        }
    }
    
    return false;
}

function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = mensaje;
    resultadoDiv.style.color = "white"; // White text color
    document.getElementById("reiniciar").disabled = false;
}

// Create the cells of the board
for (let i = 0; i < 9; i++) {
    const cell = createCell();
    board.appendChild(cell);
}

// Start the game with the web's move (computer)
webPlay();
