function parseHex(hex) {
  const value = String(hex ?? '').replace('#', '').trim()
  if (value.length === 3) {
    return value.split('').map((ch) => parseInt(ch + ch, 16))
  }
  if (value.length === 6) {
    return [value.slice(0, 2), value.slice(2, 4), value.slice(4, 6)].map((chunk) => parseInt(chunk, 16))
  }
  return [0, 0, 0]
}

function toHex(rgb) {
  return `#${rgb.map((channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, '0')).join('')}`
}

export function mix(colorA, colorB, amount = 0.5) {
  const a = parseHex(colorA)
  const b = parseHex(colorB)
  const t = Math.max(0, Math.min(1, amount))
  return toHex(a.map((channel, index) => channel + (b[index] - channel) * t))
}

export function withAlpha(color, alpha = 1) {
  const [r, g, b] = parseHex(color)
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, alpha))})`
}

export function relativeLuminance(color) {
  const channels = parseHex(color).map((channel) => {
    const value = channel / 255
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

export function contrastRatio(colorA, colorB) {
  const a = relativeLuminance(colorA)
  const b = relativeLuminance(colorB)
  const lighter = Math.max(a, b)
  const darker = Math.min(a, b)
  return (lighter + 0.05) / (darker + 0.05)
}

export function isLight(color) {
  return relativeLuminance(color) > 0.45
}

export function readableOn(background, light = '#ffffff', dark = '#10151f') {
  return contrastRatio(background, light) >= contrastRatio(background, dark) ? light : dark
}

export function toneDown(color, amount = 0.25) {
  return mix(color, '#000000', amount)
}

export function hasValidContrast(background, text) {
  return contrastRatio(background, text) >= 3.5
}
