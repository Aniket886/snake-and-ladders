# Snake and Ladders

<p align="center">
  <img src="ss1.png" alt="Snake and Ladders game preview" width="100%" />
</p>

<p align="center">
  A polished browser-based <b>Snake and Ladders</b> game with a modern glassmorphism-inspired interface, exact-finish rule, shared-device multiplayer, and live move tracking.
</p>

<p align="center">
  <a href="#preview">Preview</a> •
  <a href="#features">Features</a> •
  <a href="#game-rules">Game Rules</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#run-locally">Run Locally</a>
</p>

---

## Preview

The interface combines a clean control panel with a responsive 10x10 board:

- Elegant hero section with game setup
- Dice and turn status controls
- Shared-device multiplayer for 2 to 4 players
- Visual player tokens on the board
- Move log with newest turns first
- Highlighted snake and ladder squares

---

## Features

- `2-4 player` local multiplayer
- `Exact roll to finish` on square `100`
- `Dynamic board rendering` with 100 cells
- `Snakes and ladders logic` built in JavaScript
- `Turn-based gameplay` with active player indication
- `Live dice display` and result messaging
- `Restart game` support
- `Responsive layout` for desktop and mobile screens
- `Modern typography and styling` using Fraunces and Space Grotesk

---

## Game Rules

1. Start a new game by choosing the number of players.
2. Players take turns rolling the dice.
3. If a player lands on a ladder, they climb up.
4. If a player lands on a snake, they slide down.
5. A player must land on `100` with an exact roll to win.
6. If the roll goes beyond `100`, the player stays in the same position.

---

## Tech Stack

- `HTML5`
- `CSS3`
- `Vanilla JavaScript`
- `Google Fonts`

No frameworks, build tools, or external packages are required.

---

## Board Data

### Snakes

`16→6`, `47→26`, `49→11`, `56→53`, `62→19`, `64→60`, `87→24`, `93→73`, `95→75`, `98→78`

### Ladders

`1→38`, `4→14`, `9→31`, `21→42`, `28→84`, `36→44`, `51→67`, `71→91`, `80→100`

---

## Project Structure

```text
Snake n Ladders/
├── index.html
├── styles.css
├── script.js
├── ss1.png
└── README.md
```

---

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Open the project folder.
3. Run `index.html` directly in your browser.

You can also use a lightweight local server if you prefer.

---

## UI Highlights

- Warm beige gradient background
- Soft glass-style cards
- Serif display heading for the title
- Color-coded player tokens
- Responsive board grid with clear square labels
- Separate status, players, and move log panels

---

## Future Improvements

- Add sound effects and animations
- Add player name customization
- Add dice-roll animation
- Draw visual snake and ladder paths on the board
- Add win history and score tracking
- Add single-player mode vs computer

---

## Author

Made as a front-end browser game project using vanilla web technologies.

