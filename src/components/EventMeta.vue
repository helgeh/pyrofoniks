<template>
  <v-icon size="small">mdi-map-marker</v-icon> {{ location }} - <v-icon size="small">mdi-calendar</v-icon> {{ formatDate(date) }} - Dørene åpner kl {{ formatTime(date) }}<span v-if="isPastDate(date)"> (allerede i fortid)</span>
</template>

<script setup>
  import { formatDate, formatTime, isPastDate } from '../utils.js'
  defineProps(['date', 'location'])
</script>
