<template>
  <v-card class="mb-4" :disabled="isPastDate(event.date) || event.cancelled">
    <v-card-item>
      <v-card-title :class="{cancelled: event.cancelled}">{{ event.title }}</v-card-title>
      <v-card-subtitle v-if="event.subtitle">{{ event.subtitle }}</v-card-subtitle>
    </v-card-item>
    <v-card-text v-html="event.body"></v-card-text>
    <v-card-text class="text-disabled">
      <EventMeta :date="event.date" :location="event.location" />
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { isPastDate } from '../utils.js'
  import EventMeta from './EventMeta.vue'
  const { event } = defineProps(['event'])
</script>

<style scoped>
  .cancelled {
    text-decoration: line-through;
  }
</style>
