const BENGALI_DIGITS = '০১২৩৪৫৬৭৮৯'
const DIGIT_MAP = Object.fromEntries([...BENGALI_DIGITS].map((digit, index) => [digit, String(index)]))

export const BENGALI_PATTERN = /[\u0980-\u09FF]/

export function hasBengali(value) {
  return typeof value === 'string' && BENGALI_PATTERN.test(value)
}

export function toBengaliDigits(value) {
  return String(value ?? '').replace(/[0-9]/g, (digit) => BENGALI_DIGITS[Number(digit)])
}

export function toEnglishDigits(value) {
  return String(value ?? '').replace(/[\u09E6-\u09EF]/g, (digit) => DIGIT_MAP[digit] ?? digit)
}

/** Formats ASCII/Bengali digits for display without touching stored input. */
export function formatDigits(value, language) {
  if (value === null || value === undefined) return ''
  const plain = toEnglishDigits(value)
  return language === 'bn' ? toBengaliDigits(plain) : plain
}

export function getInitials(name, fallback = 'ID') {
  const text = String(name ?? '').trim()
  if (!text) return fallback
  const words = text.split(/\s+/).filter(Boolean)
  const initials = words.slice(0, 2).map((word) => [...word][0]).join('')
  if (!initials) return fallback
  return hasBengali(text) ? initials : initials.toUpperCase()
}

export function clampTextLength(value, max = 120) {
  const text = String(value ?? '')
  return text.length > max ? `${text.slice(0, max - 1)}…` : text
}
