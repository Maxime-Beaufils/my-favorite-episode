<template>
  <nav>
    <v-app-bar>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-4">
        <span class="font-weigth-light">Mon </span>
        <span class="font-weight-bold">épisode</span>
        <v-icon color="pink" class="mx-1">fas far fa-heart</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed small fab color="primary" class="mr-4">
        <v-icon small color="white">fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer absolute temporary color="primary" v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-10">
          <v-icon x-large color="white">fas fa-user-astronaut</v-icon>
          <br />
          <span class="font-weight-bold white--text">Jack</span>
          <span class="font-weight-bold white--text">4 épisodes ajoutés</span>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style>
</style>