const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100
};

const playerPalette = [
  { name: "Player 1", color: "#ef6c42" },
  { name: "Player 2", color: "#2d7dd2" },
  { name: "Player 3", color: "#7d4fd6" },
  { name: "Player 4", color: "#169873" }
];

const state = {
  gameStatus: "setup",
  players: [],
  currentTurnIndex: 0,
  diceValue: null,
  winnerId: null,
  moveLog: []
};

const boardEl = document.getElementById("board");
const setupFormEl = document.getElementById("setup-form");
const playerCountEl = document.getElementById("player-count");
const playerNamesEl = document.getElementById("player-names");
const rollBtnEl = document.getElementById("roll-btn");
const restartBtnEl = document.getElementById("restart-btn");
const diceFaceEl = document.getElementById("dice-face");
const turnIndicatorEl = document.getElementById("turn-indicator");
const resultTextEl = document.getElementById("result-text");
const playersListEl = document.getElementById("players-list");
const moveLogEl = document.getElementById("move-log");
let diceAnimationTimer = null;

function buildBoard() {
  boardEl.innerHTML = "";

  for (let row = 9; row >= 0; row -= 1) {
    const start = row * 10 + 1;
    const rowNumbers = Array.from({ length: 10 }, (_, index) => start + index);
    const displayNumbers = row % 2 === 0 ? [...rowNumbers].reverse() : rowNumbers;

    displayNumbers.forEach((cellNumber) => {
      const cellEl = document.createElement("div");
      cellEl.className = `cell ${(cellNumber + row) % 2 === 0 ? "light" : "dark"}`;
      cellEl.dataset.cell = cellNumber;

      if (cellNumber === 100) {
        cellEl.classList.add("finish");
      }

      const numberEl = document.createElement("span");
      numberEl.className = "cell-number";
      numberEl.textContent = cellNumber;
      cellEl.appendChild(numberEl);

      if (snakes[cellNumber]) {
        const typeEl = document.createElement("span");
        typeEl.className = "cell-type snake";
        typeEl.textContent = "Snake";
        cellEl.appendChild(typeEl);
      } else if (ladders[cellNumber]) {
        const typeEl = document.createElement("span");
        typeEl.className = "cell-type ladder";
        typeEl.textContent = "Ladder";
        cellEl.appendChild(typeEl);
      }

      const tokenStackEl = document.createElement("div");
      tokenStackEl.className = "token-stack";
      cellEl.appendChild(tokenStackEl);

      boardEl.appendChild(cellEl);
    });
  }
}

function getRequestedNames() {
  return playerNamesEl.value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);
}

function createPlayers(count, customNames = []) {
  return playerPalette.slice(0, count).map((player, index) => ({
    id: index + 1,
    name: customNames[index] || player.name,
    color: player.color,
    position: 0
  }));
}

function startGame(playerCount) {
  state.players = createPlayers(playerCount, getRequestedNames());
  state.currentTurnIndex = 0;
  state.diceValue = null;
  state.winnerId = null;
  state.moveLog = [];
  state.gameStatus = "playing";

  diceFaceEl.textContent = "-";
  turnIndicatorEl.textContent = `${state.players[0].name}'s turn`;
  resultTextEl.textContent = "Roll the dice to enter the race to square 100.";

  rollBtnEl.disabled = false;
  restartBtnEl.disabled = false;

  render();
}

function restartGame() {
  const playerCount = state.players.length || Number(playerCountEl.value);
  startGame(playerCount);
}

function getCurrentPlayer() {
  return state.players[state.currentTurnIndex];
}

function addLogEntry(text) {
  state.moveLog.unshift(text);
  if (state.moveLog.length > 12) {
    state.moveLog.pop();
  }
}

function animateDice(roll) {
  window.clearTimeout(diceAnimationTimer);
  diceFaceEl.classList.remove("is-rolling");
  void diceFaceEl.offsetWidth;
  diceFaceEl.textContent = roll;
  diceFaceEl.classList.add("is-rolling");
  diceAnimationTimer = window.setTimeout(() => {
    diceFaceEl.classList.remove("is-rolling");
  }, 420);
}

function movePlayer() {
  if (state.gameStatus !== "playing") {
    return;
  }

  const player = getCurrentPlayer();
  const roll = Math.floor(Math.random() * 6) + 1;
  const attemptedPosition = player.position + roll;

  state.diceValue = roll;
  animateDice(roll);

  if (attemptedPosition > 100) {
    addLogEntry(`${player.name} rolled ${roll} but needs an exact roll to finish.`);
    resultTextEl.textContent = `${player.name} rolled ${roll}. Exact roll needed for square 100, so the token stays on ${player.position}.`;
    advanceTurn();
    render();
    return;
  }

  let finalPosition = attemptedPosition;
  let eventText = `${player.name} moved from ${player.position} to ${attemptedPosition}.`;

  if (ladders[attemptedPosition]) {
    finalPosition = ladders[attemptedPosition];
    eventText = `${player.name} rolled ${roll}, climbed a ladder from ${attemptedPosition} to ${finalPosition}.`;
  } else if (snakes[attemptedPosition]) {
    finalPosition = snakes[attemptedPosition];
    eventText = `${player.name} rolled ${roll}, hit a snake on ${attemptedPosition}, and slid to ${finalPosition}.`;
  } else {
    eventText = `${player.name} rolled ${roll} and moved to ${finalPosition}.`;
  }

  player.position = finalPosition;

  if (finalPosition === 100) {
    state.gameStatus = "won";
    state.winnerId = player.id;
    rollBtnEl.disabled = true;
    turnIndicatorEl.textContent = `${player.name} wins`;
    resultTextEl.textContent = `${player.name} reached square 100 and won the game. Press restart to play again.`;
    addLogEntry(`${player.name} rolled ${roll} and won the game.`);
    render();
    return;
  }

  addLogEntry(eventText);
  resultTextEl.textContent = eventText;
  advanceTurn();
  render();
}

function advanceTurn() {
  state.currentTurnIndex = (state.currentTurnIndex + 1) % state.players.length;
  turnIndicatorEl.textContent = `${getCurrentPlayer().name}'s turn`;
}

function renderPlayers() {
  playersListEl.innerHTML = "";

  if (state.players.length === 0) {
    const emptyEl = document.createElement("p");
    emptyEl.className = "player-position";
    emptyEl.textContent = "No players yet. Start a new game to populate the board.";
    playersListEl.appendChild(emptyEl);
    return;
  }

  state.players.forEach((player, index) => {
    const cardEl = document.createElement("article");
    cardEl.className = "player-card";

    if (state.gameStatus === "playing" && index === state.currentTurnIndex) {
      cardEl.classList.add("active");
    }

    const badgeEl = document.createElement("span");
    badgeEl.className = "player-badge";
    badgeEl.style.backgroundColor = player.color;

    const metaEl = document.createElement("div");
    metaEl.className = "player-meta";
    metaEl.innerHTML = `<strong>${player.name}</strong><span>${player.position === 0 ? "Waiting at start" : "In play"}</span>`;

    const positionEl = document.createElement("p");
    positionEl.className = "player-position";
    positionEl.textContent = player.position === 0 ? "Start" : `Square ${player.position}`;

    cardEl.appendChild(badgeEl);
    cardEl.appendChild(metaEl);
    cardEl.appendChild(positionEl);
    playersListEl.appendChild(cardEl);
  });
}

function renderBoardTokens() {
  document.querySelectorAll(".token-stack").forEach((stackEl) => {
    stackEl.innerHTML = "";
  });

  state.players.forEach((player) => {
    if (player.position === 0) {
      return;
    }

    const cellEl = boardEl.querySelector(`[data-cell="${player.position}"] .token-stack`);
    if (!cellEl) {
      return;
    }

    const tokenEl = document.createElement("span");
    tokenEl.className = "token";
    tokenEl.style.backgroundColor = player.color;
    tokenEl.title = `${player.name} on square ${player.position}`;
    cellEl.appendChild(tokenEl);
  });
}

function renderMoveLog() {
  moveLogEl.innerHTML = "";

  if (state.moveLog.length === 0) {
    const itemEl = document.createElement("li");
    itemEl.textContent = "No moves yet.";
    moveLogEl.appendChild(itemEl);
    return;
  }

  state.moveLog.forEach((entry) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = entry;
    moveLogEl.appendChild(itemEl);
  });
}

function render() {
  renderPlayers();
  renderBoardTokens();
  renderMoveLog();
}

setupFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  startGame(Number(playerCountEl.value));
});

rollBtnEl.addEventListener("click", movePlayer);
restartBtnEl.addEventListener("click", restartGame);
document.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }

  if (event.key.toLowerCase() === "r" && !rollBtnEl.disabled) {
    movePlayer();
  }
});

buildBoard();
render();
