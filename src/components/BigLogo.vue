<script setup>
  import { ref, watch, onMounted } from 'vue'
  import { version } from 'vuetify'

  import BigLogoSvg from './BigLogoSvg.vue'

  const title = import.meta.env.VITE_APP_TITLE;

  const containerClass = ref('fill-height')
  const isLoaded = ref(false)
  const props = defineProps({
    loaded: Boolean,
    msg: {
      type: String,
      default: 'Welcome to Vuetify.',
    },
  })
  const logoElem = ref(null)
  watch(
    () => props.loaded,
    val => {
      isLoaded.value = val
      // setTimeout(() => {
      //   containerClass.value = 'fill-height tucked'
      //   setTimeout(() => {
      //     console.log('hmm', logoElem.value.$el.querySelector('svg').clientHeight)
      //   }, 500)
      // }, 500)
    }
  )
  onMounted(() => {
    if (props.loaded === true)
      isLoaded.value = true
  })
</script>

<template>
  <v-container class="mt-5 mb-2 logo-container" max-width="900px">
    <v-slide-y-transition>
      <BigLogoSvg 
        v-show="isLoaded"
        ref="logoElem"
      />
    </v-slide-y-transition>
  </v-container>
</template>

<style scoped>
.logo-container {
  fill: rgb(237, 91, 88);
  filter: drop-shadow(0px 12px 12px #000000);
  max-width: 900px !important;
}
.logo-container__DISABLED:hover {
  will-change: filter;
  filter: drop-shadow(0px 12px 12px #904000);
}
.tucked {
  height: 300px !important;
  /*transition: height 0.5s ease-in-out;*/
  /*aspect-ratio: 16/9;*/
}
</style>
