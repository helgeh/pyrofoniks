<template>
	
  <v-fade-transition>
    <v-btn
      prepend-icon="mdi-play"
      class="position-absolute bottom-0 right-0 ma-4"
      color="amber-darken-3"
      @click="videoOverlay = true"
      v-show="isLoaded"
    >
      se video
    </v-btn>
  </v-fade-transition>

  <v-overlay
    v-model="videoOverlay"
    class="align-center justify-center"
    scrim="red"
  >
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lE8pq3imEiM?si=0CICKHHQm55Wegd_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </v-overlay>

</template>

<script setup>
  import { ref, watch } from 'vue'
  const videoOverlay = ref(false)
  const isLoaded = ref(false)
  const props = defineProps({loaded: Boolean})
  watch(
    () => props.loaded,
    val => setTimeout(_ => isLoaded.value = val, 500)
  )
</script>