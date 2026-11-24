export function getCardLayout(width, height) {
  const ratio = Number(width) / Number(height)
  if (ratio > 1.28) return 'landscape'
  if (ratio < 0.82) return 'portrait'
  return 'square'
}

export function sanitizeFilename(value, fallback) {
  const clean = String(value ?? '')
    .trim()
    .replace(/[^a-z0-9]+/gi, '_')
    .replace(/^_|_$/g, '')
  return clean || fallback
}

export function buildFileName(fullName, cardTitle) {
  const name = sanitizeFilename(fullName, '')
  const title = sanitizeFilename(cardTitle, '')
  if (!name && !title) return 'Card_Studio.png'
  return `${name || 'Member'}_${title || 'Card'}.png`
}

export function isValidDimension(value) {
  const number = Number(value)
  return Number.isFinite(number) && number >= 100 && number <= 10000
}
