<template>
  <v-card class="mb-4" :disabled="isPastDate(date)">
    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
    </v-card-item>
    <v-card-text v-html="body"></v-card-text>
    <v-card-text class="text-disabled">
      <EventMeta :date="date" :location="location" />
    </v-card-text>
  </v-card>
</template>

<script setup>
  defineProps(['title', 'subtitle', 'body', 'date', 'location'])
  function isPastDate(isoDate) {
    const date = new Date(Date.parse(isoDate))
    const now = new Date()
    return date.getTime() < now.getTime()
  }
</script>
