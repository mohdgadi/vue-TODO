<template>
  <div class="List of items">
      List of items
    <h-search @enter="save"></h-search>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HSearch from '@/components/h-search.vue'
import { mapState } from 'vuex';
import { Item, list } from '../store/vuex-modules/list/module';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace as namespaces
} from 'vuex-class';

const namespace = 'list'
console.log(namespace)

@Component({
    computed: {
        ...mapState("list", ["items", "createdAt"])
    },
   components: {
       'h-search': HSearch,
   }
})


export default class Home extends Vue {
    items!: Item[]; 

    public save() {
        this.$store
        .dispatch(`${namespace}/addItem`, {
            val: 'hey', 
        })
    }
}
</script>
