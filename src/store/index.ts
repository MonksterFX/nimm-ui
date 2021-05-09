import { Orientation, createMove } from '@monksterfx/nimm-engine/dist/src/field';
import { GameState } from '@monksterfx/nimm-engine/dist/src/state';
import { createStore } from 'vuex';

export default createStore({
  state: {
    isRendered: true,
    isCurrentPlayer: true,
    ortientation: Orientation.LEFT,
    gameState: new GameState({ size: [10, 10] }),
  },
  mutations: {
    makeMove(state, stoneId: number) {
      const move = createMove(stoneId, state.ortientation);
    },
  },
  actions: {},
  modules: {},
});
