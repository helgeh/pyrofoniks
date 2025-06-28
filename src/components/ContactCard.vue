<template>
  <v-fade-transition>
    <v-card
      prepend-icon="mdi-phone-classic"
      variant="plain"
      class="mx-auto mb-12"
      href="tel:+4792239908"
      rel="noopener"
      color="deep-orange-lighten-3"
      max-width="225"
      subtitle="(+47) 92 23 99 08"
      title="Kontakt oss"
      v-show="isLoaded"
    >
    </v-card>
  </v-fade-transition>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const isLoaded = ref(false)
  const props = defineProps({loaded: Boolean})
  watch(
    () => props.loaded,
    val => isLoaded.value = val
  )
</script>
