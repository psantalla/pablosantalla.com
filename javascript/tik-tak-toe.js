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
            // Simular el movimiento de la computadora (jugador "🐢")
            cells[i].textContent = "🐢";
            currentPlayer = "🐔";
            
            // Verificar si la computadora ganó con este movimiento
            if (checkWinningMove(cells[i])) {
                mostrarResultado("¡La computadora ha ganado!");
            }
            
            return;
        }
    }
}

function checkWinningMove(cell) {
    // Copiar el tablero actual
    const cells = document.querySelectorAll(".com-cell");
    const boardCopy = [...cells].map((cell) => cell.textContent);
    
    // Obtener el índice de la celda clicada
    const index = Array.from(cells).indexOf(cell);
    
    // Marcar la celda en el tablero copiado
    boardCopy[index] = "🐢";
    
    // Verificar si este movimiento es ganador para la computadora
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
    resultadoDiv.style.color = "white"; // Color de texto blanco
    document.getElementById("reiniciar").disabled = false;
}

// Crear las celdas del tablero
for (let i = 0; i < 9; i++) {
    const cell = createCell();
    board.appendChild(cell);
}

// Comienza el juego con el movimiento de la web (computadora)
webPlay();
