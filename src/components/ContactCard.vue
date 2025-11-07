<template>
  <v-fade-transition>
    <v-card
      prepend-icon="mdi-email-outline"
      variant="plain"
      class="mx-auto mb-12"
      href="mailto: post@pyrofoniks.no"
      rel="noopener"
      color="deep-orange-lighten-3"
      max-width="225"
      subtitle="post@pyrofoniks.no"
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
