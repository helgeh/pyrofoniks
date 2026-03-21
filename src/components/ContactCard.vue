<template>
  <v-container>
    <v-row>
      <v-col>
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
            title="Epost"
            v-show="isLoaded"
          >
          </v-card>
        </v-fade-transition>
      </v-col>
      <v-col>
        <v-fade-transition>
          <v-card
            prepend-icon="mdi-phone-outline"
            variant="plain"
            class="mx-auto mb-12"
            href="tel: +4792239908"
            rel="noopener"
            color="deep-orange-lighten-3"
            max-width="225"
            subtitle="+47 92 23 99 08"
            title="Telefon"
            v-show="isLoaded"
          >
          </v-card>
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  import { ref, watch, onMounted } from 'vue'
  const isLoaded = ref(false)
  const props = defineProps({loaded: Boolean})
  watch(
    () => props.loaded,
    val => isLoaded.value = val
  )
  onMounted(() => {
    isLoaded.value = props.loaded
  })
</script>
