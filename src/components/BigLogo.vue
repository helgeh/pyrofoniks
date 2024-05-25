<script setup lang="ts">
import { version } from 'vuetify';

import Meta from '@/Meta';

const title = import.meta.env.VITE_APP_TITLE;

/** Props */
defineProps({
  msg: {
    type: String,
    default: 'Welcome to Vuetify.',
  },
});
</script>

<template>
  <v-container>
      <!-- <div class="logo-container"> -->
        <v-img
          src="@/assets/logo.svg"
          alt="Pyrofoniks"
          class="logo-container mx-auto"
        />
        <!-- <svg viewBox="0 0 1970.53 795.29">
          <use href="@/assets/symbols.svg#pyrofoniks-logo"></use>
        </svg> -->
      <!-- </div> -->
  </v-container>
</template>

<style scoped>
.logo-container svg {
  fill: #a53a3a;
  filter: drop-shadow(0px 12px 12px #000000);
}
.logo-container__DISABLED:hover {
  will-change: filter;
  filter: drop-shadow(0px 12px 12px #904000);
}
</style>
