<template>
  <div class="List of items">
      List of items
    <h-search @enter="save"></h-search>
    <h1> Items </h1>
    <div class="items">
        <div class="list-items" v-for="item in items" :key="item.id">
            <span>ID:{{ item.id }}, Name: {{ item.name }}, createdAt: {{ item.createdAt }}</span>
            <v-btn color="error" @click="deleteItem(item.id)">Delete</v-btn>
            <!-- <button @click="deleteItem(item.id)">Delete</button> -->
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HSearch from '@/components/h-search.vue';
import { mapState } from 'vuex';
import { list } from '../store/vuex-modules/list/module';
import { Item } from '../store/vuex-modules/list/item-view-model'
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace as namespaces,
} from 'vuex-class';

const namespace = 'list';

@Component({
    computed: {
        ...mapState("list", ["items", "createdAt"]),
    },
   components: {
       'h-search': HSearch,
   }
})


export default class Home extends Vue {
    public items!: Item[];

    public save(message: string) {
        this.$store
        .dispatch(`${namespace}/addItem`, {
            val: message,
        });
    }

    public deleteItem(id: string) {
        this.$store
        .dispatch(`${namespace}/deleteItem`, {
            val: id,
        });
    }

   public mounted() {
        // this.items = this.$store.getters['list/items'];
        console.log(this.items);
    }

}
</script>
