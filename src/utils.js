
export function formatDate(isoDate) {
  return new Date(Date.parse(isoDate)).toLocaleDateString(['nb-NO', 'en-US'])
}

export function formatTime(isoDate) {
  return new Date(Date.parse(isoDate)).getHours() // .toLocaleTimeString(['nb-NO', 'en-US'])
}

export function isPastDate(isoDate) {
  const date = new Date(Date.parse(isoDate))
  const now = new Date()
  return date.getTime() < now.getTime()
}
