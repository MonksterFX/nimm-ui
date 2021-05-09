<template>
  <div id="nimm_game"></div>
</template>

<script lang="ts">
import { Svg, SVG } from '@svgdotjs/svg.js';
import { onMounted } from '@vue/runtime-core';
import { GameState } from '@monksterfx/nimm-engine/dist/src/state';

import * as painter from '../lib/game/painter';

let gameState: GameState;
let draw: Svg;

export default {
  setup() {
    onMounted(() => {
      gameState = new GameState({ size: [10, 10] });
      draw = SVG().addTo('#nimm_game').size(1000, 1000);
      console.log(gameState.toString());
      // gameState where is move?
      console.log(gameState.gameField.field);
      painter.drawGame(draw, gameState);
    });
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
