<template>
	
  <v-container class="d-flex justify-center videocontainer mb-5">
    <v-fade-transition>
      <iframe v-if="isLoaded" src="https://www.youtube.com/embed/lE8pq3imEiM?si=0CICKHHQm55Wegd_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div v-if="!isLoaded">&nbsp;</div>
    </v-fade-transition>
  </v-container>

</template>

<script setup>
  import { ref, watch } from 'vue'
  const isLoaded = ref(false)
  const props = defineProps({loaded: Boolean})
  window.toggleMe = function () {
    isLoaded.value = !isLoaded.value
  }
  watch(
    () => props.loaded,
    val => {
      isLoaded.value = val
    }
  )
</script>

<style scoped>
  .videocontainer {
    overflow: hidden;
    aspect-ratio: 2.1/1;
    width: 100%;
    max-width: 1080px;
  }
  iframe {
    background: rgba(0,0,0,0.3);
    aspect-ratio: 16/9;
    width: 100%;
  }
</style>
