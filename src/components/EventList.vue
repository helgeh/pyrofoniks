<template>

  <v-container class="mt-5 mb-2" max-width="900px">
    <v-fade-transition v-for="event in events">
      <EventCard
        :title="event.title"
        :body="event.body"
        :date="event.date"
        :location="event.location"
      />
    </v-fade-transition>
  </v-container>

</template>

<script setup>
  import { ref } from 'vue'
  import EventCard from './EventCard.vue';
  import { useAppStore } from '../stores'
  const { events } = useAppStore()
</script>
