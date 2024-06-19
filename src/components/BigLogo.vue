<script setup>
  import { ref, watch, onMounted } from 'vue'
  import { version } from 'vuetify'

  const title = import.meta.env.VITE_APP_TITLE;

  const isLoaded = ref(false)
  const props = defineProps({
    loaded: Boolean,
    msg: {
      type: String,
      default: 'Welcome to Vuetify.',
    },
  })
  watch(
    () => props.loaded,
    val => isLoaded.value = val
  )
</script>

<template>
  <v-container >
    <v-fade-transition>
      <v-img
        src="@/assets/logo.svg"
        alt="Pyrofoniks"
        class="logo-container mx-auto mt-4"
        v-show="isLoaded"
      />
    </v-fade-transition>
  </v-container>
</template>

<style scoped>
.logo-container {
  fill: rgb(237, 91, 88);
  filter: drop-shadow(0px 12px 12px #000000);
}
.logo-container__DISABLED:hover {
  will-change: filter;
  filter: drop-shadow(0px 12px 12px #904000);
}
</style>
