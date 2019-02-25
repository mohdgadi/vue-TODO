import { Module, GetterTree, ActionTree, MutationTree, Mutation} from 'vuex';
import { RootState } from '@/store/store';
import { inversifyContainer } from '@/config/inversify.config';
import { ListService } from '@/app/list/service';
import { Item } from '@/store/vuex-modules/list/item-view-model';
const uuidv1 = require('uuid/v1');

export interface ListState {
    items: Item[];
    createdAt: Date;
}

const state: ListState = {
    items: [],
    createdAt: new Date(),
}

const injections = {
    ListService: inversifyContainer.get<ListService>('ListService')
};

export const getters: GetterTree<ListState, RootState> = {
    items() {
        return state.items || [];
    },

    createdAt() {
        return state.createdAt;
    },

    list() {
        return state;
    },
};

export const mutations: MutationTree<ListState> = {
    addItem(state: ListState, val: Item) {
        state.items.push(val);
        console.log("adding item");
    },

    deleteItem(state: ListState, id: string) {
      console.log(id, "dekete");
      state.items = state.items.filter((item) => item.id !== id);
    },

    deleteList(state: ListState, val: string) {
        state.createdAt = new Date();
        state.items = [];
    }
}

export const actions: ActionTree<ListState, RootState> = {

    addItem({commit}, { val }): any {
        let i: Item = { id: uuidv1(), name: val, createdAt: new Date()};
        return new Promise((resolve, reject) => {
            injections.ListService.addItemRequest(
                i,
                () => {
                    commit('addItem', i);
                    resolve();
                },
                err => reject('Error in adding item'),
            )}
        )},

        deleteItem({commit}, { val }): any {
            return new Promise((resolve, reject) => {
                injections.ListService.deleteItemRequest(
                    val,
                    () => {
                        commit('deleteItem', val);
                        resolve();
                    }, 
                    err => reject('Error in adding item'),
                )}
            )},
};

const namespaced: boolean = true;

export const list: Module<ListState, RootState> = {
    namespaced,
    state,
    actions,
    getters,
    mutations,
};
