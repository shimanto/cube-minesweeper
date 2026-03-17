# Cube Minesweeper

A 3D Minesweeper game on a rotating cube. 6 faces × 5×5 grid = 150 cells, 25 mines.

**[Play Now](https://shimanto.github.io/cube-minesweeper/)**

![Cube Minesweeper](https://img.shields.io/badge/game-play%20now-blue)

## How to Play

- **Rotate** the cube by dragging (mouse) or swiping (touch)
- **Dig** a cell by clicking / tapping
- **Flag** a mine by right-clicking or long-pressing
- Numbers show adjacent mines — including across face edges and cube corners

## Tech Stack

- **Zero dependencies** — single HTML file, no frameworks, no build step
- **CSS 3D Transforms** — `perspective` + `preserve-3d` for the rotating cube
- **Cross-face adjacency** — cells share 3D vertex coordinates to detect neighbors across faces and corners
- **Mobile-ready** — touch events, auto-scaling, long-press for flags

## Run Locally

```
git clone https://github.com/shimanto/cube-minesweeper.git
open cube-minesweeper/index.html
```

No install needed. It's just HTML.

## The Story / 制作逸話

### English

This game was born from a casual conversation between [Nishitani-san](https://github.com/) and [Shimanto](https://github.com/shimanto). Starting with a simple prompt — "I want to make Minesweeper" — we iteratively built it using [Claude Code](https://claude.ai/claude-code) (Anthropic's CLI coding tool), guiding the AI step by step in Japanese.

The journey went like this:
1. "Make a Minesweeper" → classic 2D version generated
2. "Deploy it to Cloudflare" → auto-deployed via Wrangler
3. "Make it a 5×5 cube and publish it" → full 3D rewrite with CSS transforms and cross-face adjacency algorithm
4. "I can't rotate it with the mouse" → drag vs. click detection fixed
5. "Make it work on smartphones" → touch events, auto-scaling, long-press flags
6. "Create a page explaining how it was made" → `about.html` generated

**Zero lines of code were written by hand.** All code generation, bug fixes, and deployments were handled by Claude Code. The humans just gave instructions in Japanese and tested in the browser.

### 日本語

このゲームは[西谷さん](https://github.com/)と [Shimanto](https://github.com/shimanto) の会話から生まれました。「マインスイーパーをつくりたい」という一言から、[Claude Code](https://claude.ai/claude-code)（Anthropic の CLI コーディングツール）を使い、日本語で指示を出しながら対話的に開発しました。

制作の流れ：
1. 「マインスイーパーをつくりたい」→ クラシックな 2D 版を生成
2. 「これを Cloudflare に公開して」→ Wrangler で自動デプロイ
3. 「立方体で5×5で作って公開して」→ CSS 3D Transform で完全書き直し、面をまたぐ隣接判定アルゴリズムを実装
4. 「マウスで回せない」→ ドラッグとクリックの判定を修正
5. 「スマホ対応して」→ タッチイベント、自動スケーリング、長押しフラグ
6. 「制作過程の解説ページを作って」→ `about.html` を生成

**人間が書いたコードは 0 行。** コード生成・バグ修正・デプロイの全てを Claude Code が実行しました。人間がやったのは日本語で指示を出し、ブラウザで動作確認しただけです。

## License

MIT
