<template>
  <v-icon size="small">mdi-map-marker</v-icon> {{ location }} - <v-icon size="small">mdi-calendar</v-icon> {{ formatDate(date) }} - Dørene åpner kl {{ formatTime(date) }}<span v-if="isPastDate(date)"> (allerede i fortid)</span>
</template>

<script setup>
  defineProps(['date', 'location'])
  function formatDate(isoDate) {
    return new Date(Date.parse(isoDate)).toLocaleDateString(['nb-NO', 'en-US'])
  }
  function formatTime(isoDate) {
    return new Date(Date.parse(isoDate)).getHours() // .toLocaleTimeString(['nb-NO', 'en-US'])
  }
  function isPastDate(isoDate) {
    const date = new Date(Date.parse(isoDate))
    const now = new Date()
    return date.getTime() < now.getTime()
  }
</script>
