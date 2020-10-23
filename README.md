# Colors Game

## Overview

**Colors Game** is a browser game in which your task is to gain points by destroying neighboring blocks of the same color.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Rules

- You gain points by clicking on the block that is surrounded by blocks of the same color. The block of the same color has to be to the top, bottom, right or left of the clicked block.
- You gain one point per destroyed block.
- Once you destroy some group of blocks, the filled space is taken by blocks existing to the top of them or new blocks are generated.
- You can play until you get bored or there are no groups of neighboring same-colored blocks!

## To Do

- Implement score.
- Implement an animation for when the change on the game board occurs.
- Implement board examiner so that a button for generating new board appears if there are no available moves on the board.
- Display a message on the board if the user clicks on the block which does not have same-colored neighbors.
- Let user choose the dimensions of the board (6 < y < 12, 6 < x < 20).
- Make more responsive.
- Refactor, simplify and comment.
- Distinguish between production and development.
- Deploy onto GitHub Pages as a demo.

## How to run

In the project directory, you can run:

    yarn start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
