---
title: Sokoban
date: 18th Feb 2020
description: I made a small web-based version of Sokoban using HTML, CSS and JavaScript...
image: /blogs-img/sokoban-background-light_feature-image.png
alt: Sokoban
ogImage: /blogs-img/sokoban-background-light_feature-image.png
tags: ['game', 'puzzle', 'classic']
published: true
---

### Overview

[Sokoban](https://en.wikipedia.org/wiki/Sokoban) is a classic puzzle game where the player moves through a warehouse-style grid and pushes boxes onto designated storage locations. The rules are simple: the player can move around the space and push boxes, but cannot pull them back. This makes each move important, as one wrong push can easily block the path or make a level impossible to complete.

The game was designed in 1981 by Hiroyuki Imabayashi. Although the concept is very minimal, Sokoban is a good example of how simple rules can create challenging puzzle gameplay.

### Context

![Sokoban](blogs-img/sokoban-background-light_feature-image.png)

Sokoban

I made a small web-based version of Sokoban using HTML, CSS and JavaScript. I wanted to recreate the core puzzle mechanics of the original game in a browser-based format, focusing on the board layout, player movement, box pushing logic and level progression.

I designed the game board as a grid and mapped different HTML elements to represent each part of the puzzle, including the player, walls, floor spaces, boxes and storage locations. I also created and stored different level layouts, so the game can load more than one puzzle. Currently, there are three levels for the player to complete.

For the game logic, I used JavaScript to control how the player moves through the board. The player can move one square at a time, either horizontally or vertically, onto an empty floor space. When the player moves into a box, the game checks whether the box can be pushed forward into the next square. If the space is clear, the box moves; if it is blocked by a wall or another box, the move is not allowed. The objective is to push all boxes onto the storage locations. Once every box is in the correct place, the level is complete.

### Project Links

- [Project URL](https://lucie07.github.io/sokoban-game/)
- [GitHub repository](https://github.com/lucie07/sokoban-game)
