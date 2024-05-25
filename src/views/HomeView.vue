<script setup lang="ts">
import BigLogo from '@/components/BigLogo.vue';
import ContactCard from '@/components/ContactCard.vue';

const jsonLd = JSON.stringify(
  {
    '@schema': 'https://json.schemastore.org/jsonld.json',
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Pyrofoniks Partyband',
    url: 'https://pyrofoniks.no',
    description: 'Pyrofoniks Partyband cover band. Kontakt oss for oppdrag.',
  },
  null,
  2
);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <big-logo />
      <contact-card />
    </v-responsive>
  </v-container>
  <teleport to="head">
    <meta
      name="keyword"
      content="pyrofoniks,cover-band,band,concert,music,live-show,event"
    />
    <meta name="description" content="Pyrofoniks Partyband er et cover band. Kontakt oss for oppdrag." />
    <component :is="'script'" type="application/ld+json">
      {{ jsonLd }}
    </component>
  </teleport>
</template>
