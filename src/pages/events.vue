<template>

  <BigLogo :loaded="true" />

  <EventList />

  <v-fab
    key="fixed"
    :app="true"
    color="red"
    elevation="20"
    icon
    location="right bottom"
    position="static"
    size="large"
    to="/"
    title="Tilbake"
  >
    <v-icon size="large">mdi-arrow-left-circle</v-icon>
  </v-fab>

</template>

<script setup></script>

<style scoped></style>
