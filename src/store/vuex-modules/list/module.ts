import { Module, GetterTree, ActionTree, MutationTree, Mutation} from 'vuex';
import { RootState } from '@/store/store';
import { inversifyContainer } from '@/config/inversify.config';
import { ListService } from '@/app/list/service';

export interface ListState {
    items: Array<Item>,
    createdAt: Date,
}

export interface Item {
    id: string,
    name: string,
    createdAt: Date,
}

const state: ListState = {
    items: [],
    createdAt: new Date(),
}

const injections = {
    ListService: inversifyContainer.get<ListService>('ListService')
};

export const getters: GetterTree<ListState, RootState> = {
    timers() {
        return state.items || [];
    },

    createdAt() {
        return state.createdAt;
    },
};

export const mutations:MutationTree<ListState> = {
    addItem(state: ListState, val: Item) {
        state.items.push(val)

    },

    deleteItem(state: ListState, id: string) {
        var i: number;
       for( i=0; i<state.items.length; i++){
        if (state.items[i].id === id) {
            // remove and break
        }
       }
    },

    deleteList(state: ListState, val: string) {
        state.createdAt = new Date()
        state.items = []
    }
}

export const actions: ActionTree<ListState, RootState> = {

    addItem({commit}, { val }): any {
        let i: Item = { id: name, name: val, createdAt: new Date()};
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
};

const namespaced: boolean = true;

export const list: Module<ListState, RootState> = {
    namespaced,
    state,
    actions,
    getters,
    mutations,
}