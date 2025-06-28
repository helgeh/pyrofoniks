<template>
  
  <BigLogo :loaded="logoLoaded" />

  <VideoOverlay :loaded="videoLoaded" />

  <ContactCard :loaded="contactLoaded" />

</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const logoLoaded = ref(false)
  const contactLoaded = ref(false)
  const videoLoaded = ref(false)
  onMounted(() => {
    setTimeout(() => logoLoaded.value = true, 100)
    setTimeout(() => contactLoaded.value = true, 900)
    setTimeout(() => videoLoaded.value = true, 1250)
  })
</script>
