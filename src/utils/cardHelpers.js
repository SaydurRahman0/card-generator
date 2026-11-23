export function getCardLayout(width, height) {
  const ratio = Number(width) / Number(height)
  if (ratio > 1.25) return 'landscape'
  if (ratio < 0.82) return 'portrait'
  return 'square'
}

export function sanitizeFilename(value, fallback) {
  const clean = value.trim().replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '')
  return clean || fallback
}
