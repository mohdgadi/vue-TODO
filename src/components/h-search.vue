<template>
<div>
    <p>this is h search</p>
    <input type="text" @keydown.enter="save" v-model="message">
</div>
</template>


<style lang="scss" scoped>
    input {
        background-color: wheat;
    }
</style>


<script lang="ts">

import { Component, Prop, Vue, Model } from 'vue-property-decorator';

export default class HSearch extends Vue {
    public message: string = '';

   public save() {
       console.log(this.message);
    //    this.message = '';
    //    console.log("after",this.message);
    //    this.$forceUpdate();
        this.$emit("enter")
    }
}
</script>
