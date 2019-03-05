<template>
    <div>
        <p>this is h search {{ message11 }}</p>
        <input class="input_field" type="text" @keydown.enter="save" v-model='message11'>
    </div>
</template>


<style lang="scss" scoped>
    .input_field {
        background-color: wheat;
        padding: 5px;
    }
</style>


<script lang="ts">

import { Component, Prop, Vue, Model } from 'vue-property-decorator';

@Component
export default class HSearch extends Vue {

   public message11: string = 'ewf';

    public save() {
        this.$emit('enter', this.message11);
        this.message11 = '';
    }
}
</script>
