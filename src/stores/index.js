import { ref, shallowRef } from 'vue'

const isLogoLoaded = shallowRef(false)

const events = ref([
    {
      title: 'Musikk-quiz',
      body: 'Arnadal Musikkforening arrangerer live musikk-quiz med konsert den 14. mars. Hele bygda kommer - kommer du?',
      date: '2026-03-14T18:00:00+01:00', // '14. mars',
      location: 'Arnadal',
    },
    {
      title: 'Jubileumsfest!',
      body: 'Den 30. mai spiller Pyrofoniks på Arnadal Idrettslags jubileumsfest!',
      date: '2026-05-30T18:00:00+01:00', // '30. mai',
      location: 'Arnadal',
    },
    {
      title: 'Konsert på Bache Bar!',
      body: 'Vi spiller på utescenen i bakgården på Bache Bar i Holmestrand den 1. august. Kom og rock med oss!',
      date: '2026-08-01T18:00:00+01:00', // '1. august',
      location: 'Holmestrand',
    }
])

export function useAppStore() {
    return {
        isLogoLoaded,
        events
    }
}
