const FONT_FACES = [
  '400 16px "Hind Siliguri"',
  '500 16px "Hind Siliguri"',
  '600 16px "Hind Siliguri"',
  '700 16px "Hind Siliguri"',
  '400 16px "Manrope Variable"',
  '500 16px "Manrope Variable"',
  '700 16px "Manrope Variable"',
  '800 16px "Manrope Variable"',
  '400 16px "Playfair Display Variable"',
  '600 16px "Playfair Display Variable"',
  '700 16px "Playfair Display Variable"',
  'italic 500 16px "Playfair Display Variable"',
]

const SAMPLE_TEXT = 'অআকখগড়ঘণঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ From 0123456789'

/**
 * Fonts must be decoded before html-to-image clones the card, otherwise the
 * exported PNG falls back to a system font and breaks Bengali shaping.
 */
export async function ensureFontsReady() {
  if (typeof document === 'undefined' || !document.fonts) return
  try {
    await Promise.all(
      FONT_FACES.map((face) => document.fonts.load(face, SAMPLE_TEXT).catch(() => null)),
    )
    await document.fonts.ready
  } catch {
    /* Font loading failures are non-fatal; rendering still proceeds. */
  }
}

export async function waitForImages(root) {
  if (!root) return
  const images = [...root.querySelectorAll('img')]
  await Promise.all(
    images.map((image) =>
      image.complete && image.naturalWidth
        ? Promise.resolve()
        : new Promise((resolve) => {
            image.addEventListener('load', resolve, { once: true })
            image.addEventListener('error', resolve, { once: true })
          }),
    ),
  )
}

export function nextPaint(count = 2) {
  return new Promise((resolve) => {
    const step = (remaining) => {
      if (remaining <= 0) {
        resolve()
        return
      }
      requestAnimationFrame(() => step(remaining - 1))
    }
    step(count)
  })
}
