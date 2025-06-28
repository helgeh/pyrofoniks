<template>
	
  <v-fade-transition>
    <v-container class="d-flex justify-center videocontainer" v-show="isLoaded">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lE8pq3imEiM?si=0CICKHHQm55Wegd_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </v-container>
  </v-fade-transition>

</template>

<script setup>
  import { ref, watch } from 'vue'
  const isLoaded = ref(false)
  const props = defineProps({loaded: Boolean})
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
  }
</style>
