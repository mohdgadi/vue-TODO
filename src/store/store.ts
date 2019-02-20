import Vue from 'vue';
import Vuex from 'vuex';
import { list, ListState } from '@/store/vuex-modules/list/module' ;

Vue.use(Vuex);

export interface RootState {
  list: ListState,
}

export default new Vuex.Store({
  state: {
      list: (list.state as ListState),
  },
  modules: {
      list,
  }
});
