<template>
  <nb-container>
    <nb-header><nb-title class="tt">Premier League Standings</nb-title></nb-header>

    <nb-content v-if="loader">
      <nb-spinner color="red"/>
    </nb-content>

    <nb-content v-if="!loader">
      <nb-list-item v-for="(team, key) in team_list" :key="key" :id="key">
        <nb-left>
          <nb-text>{{team.overall_league_position}}</nb-text>
        </nb-left>
        <nb-body>
          <nb-text>{{team.team_name}}</nb-Text>
        </nb-body>
        <nb-right>
          <nb-text>{{team.overall_league_PTS}}</nb-Text>
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>

<style>
.tt{
  margin-top: 15px;
}
</style>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
Vue.use(VueNativeBase);

export default {
  name: 'Fetchig',
  data () {
    return {
      loader: true,
      team_list:[]
    }
  },
  methods:{
    fetchData(){
      fetch('https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=7015bf35c0b7be3f09a001f3cc52278b319e17f3e154da645da8696320873440')
        .then((response) => response.json())
        .then((responseJson) => {
          this['team_list'] = Object.values(responseJson)
          this.loader = false
        })
        .catch((error) => {
          console.error(error);
      })
    }
  },
  created:function(){
    this.fetchData();
  }
}
</script>