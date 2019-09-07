<template>
  <v-card class="mx-auto">
    <v-system-bar color="green darken-2"></v-system-bar>

    <v-app-bar dark color="green">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Mes episodes</v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-card class="mx-auto" elevation="234">
        <v-img
          class="white--text image"
          width="100%"
          src="http://s3cf.recapguide.com/img/tv/267/2x6/Peaky-Blinders-Season-2-Episode-6-48-fefc.jpg"
        >
          <v-card-title class="align-end text-center fill-height">
            <span class="font-weight-bold">Peaky-Blinders</span>
            <span>saison: 2 episode: 6</span>
            </v-card-title>
        </v-img>
        <v-card-text>I'm card text</v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.image {
  border-radius: 0 0 200px 200px / 0 0 10px 10px;
  box-shadow: 0px 3px 10px #4e4e4e9b;
}
</style>