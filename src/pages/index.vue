<template>
  
  <BigLogo :loaded="logoLoaded" />

  <v-divider class="my-5"></v-divider>

  <EventList />

  <v-divider class="my-5"></v-divider>

  <VideoOverlay :loaded="videoLoaded" />

  <v-divider class="my-5"></v-divider>

  <ContactCard :loaded="contactLoaded" />

  <!-- <v-fab
    key="fixed"
    :app="true"
    color="red"
    elevation="20"
    icon
    location="right bottom"
    position="static"
    size="large"
    @click="showEvents = !showEvents"
    :title="showEvents ? 'Tilbake' : 'Konserter!'"
  >
    <v-icon size="large">mdi-calendar-star</v-icon>
  </v-fab> -->

</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useAppStore } from '../stores'

  const store = useAppStore()

  const logoLoaded = ref(false)
  const contactLoaded = ref(false)
  const videoLoaded = ref(false)

  const showEvents = ref(true) // ref(false)

  // function onFabClick() {
  //   showEvents.value = true
  // }

  onMounted(() => {
    if (store.isLogoLoaded.value) {
      logoLoaded.value = true
      contactLoaded.value = true
      videoLoaded.value = true
      return
    }
    setTimeout(() => logoLoaded.value = true, 100)
    setTimeout(() => contactLoaded.value = true, 900)
    setTimeout(() => {
      videoLoaded.value = true
      store.isLogoLoaded.value = true
    }, 1250)
  })
</script>
