/* eslint-disable */

import { Orientation } from '@monksterfx/nimm-engine/dist/src/field';
import { GameState } from '@monksterfx/nimm-engine/dist/src/state';
import { Rect, SVG, Svg } from '@svgdotjs/svg.js';

let space = 10;
let size = 50;

// TODO: to state
let currentDirection: Orientation;

export function drawGame(draw: Svg, gameState: GameState) {
  let stonesGroup = draw.group();
  let gameSize = gameState.gameField.field.length;

  for (let row = 0; row < gameSize; row++) {
    for (let column = 0; column < gameSize; column++) {
      var stone = gameState.gameField.field[row][column];
      let rect = draw.rect(size, size);

      rect
        .move((size + space) * column, (size + space) * row)
        .attr({
          id: stone._id,
          fill: '#fff',
        })
        .animate()
        .attr({
          fill: '#f06',
        });

      rect.click(function(this: Rect) {
        this.fill({ color: '#f0f' });
        const id = this.id();
        removeStones(parseInt(id));
      });

      stonesGroup.add(rect);
    }
  }

  stonesGroup.move(space * 2 + 50, space * 2 + 50);

  // draw access bars
  draw
    .rect((space + size) * gameSize - space, 50)
    .move(space * 2 + 50, space)
    .attr({
      id: 'top',
      fill: '#0F0',
    })
    .click(function() {
      currentDirection = Orientation.TOP;
    });

  draw
    .rect((space + size) * gameSize - space, 50)
    .move(space * 2 + 50, (space + size) * gameSize + space * 2 + 50)
    .attr({
      id: 'bottom',
      fill: '#0F0',
    })
    .click(function() {
      currentDirection = Orientation.BOTTOM;
    });

  draw
    .rect(50, (space + size) * gameSize - space)
    .move(space, space * 2 + size)
    .attr({
      id: 'left',
      fill: '#0F0',
    })
    .click(function() {
      currentDirection = Orientation.LEFT;
    });

  draw
    .rect(50, (space + size) * gameSize - space)
    .move((space + size) * gameSize + space * 2 + 50, space * 2 + size)
    .attr({
      id: 'right',
      fill: '#0F0',
    })
    .click(function() {
      currentDirection = Orientation.RIGHT;
    });
}

export function removeStones(stones: number[]) {
  stones.forEach((stone) => {
    removeStone(stone);
  });
}

export function removeStone(stoneId: number) {
  SVG(document.getElementById(`${stoneId}`)).attr({ fill: '#0ff' });
}
