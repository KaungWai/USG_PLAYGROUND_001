<template>
  <nb-container>
    <nb-header><nb-title class="tt">Language Testing</nb-title></nb-header>

    <nb-content>
      <nb-button v-bind:on-press='showMessage'><nb-text>{{ GLB_getLbl("btn_test_button") }}</nb-text></nb-button>
    </nb-content>
  </nb-container>
</template>

<style>

</style>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
Vue.use(VueNativeBase);

export default {
  name: 'SiglePage',
  data () {
    return {

    }
  },
  methods:{
      showMessage : function(){
          alert(this.GLB_getMsg("btn_test_message"))
      }
  }
}
</script>