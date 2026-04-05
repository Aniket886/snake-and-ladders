<div align="center">

# 🐍 Ladders & Serpents 🪜

*A modern, exquisitely styled take on the classic board game.*

[![Built with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![Styled with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Powered by Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<img src="ss1.png" alt="Snake and Ladders game preview" width="800px" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); margin: 20px 0;" />

[**🕹️ Play Now**](#run-locally) &nbsp;|&nbsp; [**✨ Features**](#-key-features) &nbsp;|&nbsp; [**📜 Rules**](#-gameplay--rules)

</div>

<br />

## 🌟 Overview

Welcome to **Ladders & Serpents**, a beautifully crafted, browser-based multiplayer experience. This isn't just your standard grid—it's a fully responsive, glassmorphism-inspired redesign of the beloved classic. Featuring shared-device local multiplayer, live dynamic turn tracking, and a stunning UI prioritizing typography and color harmony.

---

## ✨ Key Features

- **Local Multiplayer Magic** 🎲: Gather around a single device and play with **2 to 4 players**.
- **Dynamic 10x10 Grid** 🧭: A programmatically generated board displaying snakes, ladders, and live player tokens.
- **Fair-Play Finishing** 🎯: You must roll the exact number required to land on 100.
- **Real-Time Match Log** 📜: An active history feed showing recent moves, climbs, and slides.
- **Exquisite UI/UX** 🎨: Crafted with modern CSS featuring glass-style cards, warm gradients, and an elegant typography pairing (*Fraunces* + *Space Grotesk*).
- **Fully Responsive** 📱: Play smoothly on your desktop, tablet, or smartphone.

---

## 📜 Gameplay & Rules

1. **Start** by selecting your desired player count (2-4). All players begin at square `0` (off-board).
2. **Roll the Dice** when it's your turn.
3. Move your token forward by the number rolled.
4. **🪜 Ladders:** Land on the base of a ladder, and you'll immediately ascend to a higher square.
5. **🐍 Snakes:** Land on a snake's head, and you'll unfortunately slide down to its tail.
6. **🏆 Winning:** To win, your token must land **exactly** on square `100`. If you roll a number higher than the exact steps needed, your token will remain in its current position until your next turn.

---

## 🛠️ Architecture & Tech Stack

This project is built from the ground up prioritizing standard web technologies without the overhead of heavy frameworks.

| Technology | Purpose |
| ---------- | ------- |
| **HTML5** | Semantic, accessible structure layout. |
| **CSS3** | Glassmorphic styling, responsive flexbox/grid layouts, customized typography. |
| **Vanilla JS** | Core game logic, DOM manipulation, turn management, and board generation. |

> **Zero Dependencies:** No React, no Vite, no NPM. Pure vanilla code.

---

## 🗺️ Board Configuration

The layout of the perils and advantages on the board is fixed to provide consistent strategic play:

<details>
<summary><b>View Snakes List 🐍</b></summary>
<br>

- Square `16` → Slide to `6`
- Square `47` → Slide to `26`
- Square `49` → Slide to `11`
- Square `56` → Slide to `53`
- Square `62` → Slide to `19`
- Square `64` → Slide to `60`
- Square `87` → Slide to `24`
- Square `93` → Slide to `73`
- Square `95` → Slide to `75`
- Square `98` → Slide to `78`

</details>

<details>
<summary><b>View Ladders List 🪜</b></summary>
<br>

- Square `1` → Climb to `38`
- Square `4` → Climb to `14`
- Square `9` → Climb to `31`
- Square `21` → Climb to `42`
- Square `28` → Climb to `84`
- Square `36` → Climb to `44`
- Square `51` → Climb to `67`
- Square `71` → Climb to `91`
- Square `80` → Climb to `100`

</details>

---

## 🚀 Run Locally

Experience it yourself in under a minute:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd "your-repo-name"
   ```

3. **Launch the game!**
   Simply open `index.html` in your favorite modern web browser.
   *(Or spin up a local dev server like VS Code Live Server for the best experience).*

---

## 🔮 Future Roadmap

We are constantly looking to improve the experience. Upcoming features include:

- [ ] 🎭 Configurable player names.
- [ ] 🤖 Single-player mode against an AI opponent.
- [ ] 🎲 CSS-based 3D dice roll animations.
- [ ] 🎨 SVG visual mapping for the snakes and ladders on the grid.
- [ ] 🔊 Audio cues for rolling, climbing, and sliding.
- [ ] 📊 Persistent win history and high score tracking using `localStorage`.

<br/>
<div align="center">
  <sub>Built with ❤️ using Vanilla Web Technologies.</sub>
</div>
