const MAX_PHOTO_SIDE = 1400

function readAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '')
    reader.onerror = () => reject(reader.error ?? new Error('Unable to read image'))
    reader.readAsDataURL(file)
  })
}

/**
 * Photos are kept as data URLs in state, so shrink them before storing:
 * multi-megabyte base64 strings make every export and preview repaint heavier.
 */
export async function readPhoto(file) {
  if (typeof createImageBitmap !== 'function') return readAsDataUrl(file)

  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, MAX_PHOTO_SIDE / Math.max(bitmap.width, bitmap.height))
    if (scale === 1) {
      bitmap.close?.()
      return readAsDataUrl(file)
    }

    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(bitmap.width * scale))
    canvas.height = Math.max(1, Math.round(bitmap.height * scale))
    const context = canvas.getContext('2d')
    context.imageSmoothingQuality = 'high'
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    bitmap.close?.()
    return canvas.toDataURL('image/jpeg', 0.92)
  } catch {
    return readAsDataUrl(file)
  }
}
