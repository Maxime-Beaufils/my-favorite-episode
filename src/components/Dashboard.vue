<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <MesEpisodes />
      </v-col>
      <v-col cols="3" >
        <DernierEpisodes />
      </v-col>
      <v-col cols="3">
        <MeilleurNotes />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MesEpisodes from "./episodes/MesEpisodes";
import DernierEpisodes from "./episodes/DernierEpisodes";
import MeilleurNotes from "./episodes/MeilleurNotes";
export default {
  components: {
    MesEpisodes,
    DernierEpisodes,
    MeilleurNotes
  }
};
</script>
<style>
</style>