<template>
  
  <BigLogo :loaded="loaded" />
  
  <ContactCard :loaded="loaded" />

  <VideoOverlay :loaded="loaded" />

</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const loaded = ref(false)
  onMounted(() => loaded.value = true)
</script>
