import Vue from 'vue';
import Vuex from 'vuex';

import MessagesModule from './modules/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chatModule: MessagesModule,
  },
});
