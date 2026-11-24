import { createElement, useCallback, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { toBlob } from 'html-to-image'
import GeneratedCard from '../components/card/GeneratedCard'
import { ensureFontsReady, nextPaint, waitForImages } from '../utils/fonts'
import { isValidDimension } from '../utils/cardHelpers'

/**
 * The export card is mounted only for the duration of a download. Keeping it
 * out of the live tree removes a second full-resolution card from every
 * keystroke's render and repaint.
 */
export function useCardExport() {
  const busy = useRef(false)
  const [exporting, setExporting] = useState(false)

  const download = useCallback(async ({ card, templateId, colors, width, height, fileName }) => {
    const w = Math.round(Number(width))
    const h = Math.round(Number(height))
    if (busy.current || !card || !isValidDimension(w) || !isValidDimension(h)) return false

    busy.current = true
    setExporting(true)
    let host = null
    let root = null

    try {
      await ensureFontsReady()

      host = document.createElement('div')
      host.className = 'export-host'
      host.setAttribute('aria-hidden', 'true')
      document.body.appendChild(host)

      root = createRoot(host)
      flushSync(() => {
        root.render(
          createElement(GeneratedCard, {
            card,
            templateId,
            colors,
            width: w,
            height: h,
            exportMode: true,
          }),
        )
      })

      await ensureFontsReady()
      await waitForImages(host)
      await nextPaint(2)

      const node = host.querySelector('.generated-card')
      if (!node) return false

      const blob = await toBlob(node, {
        width: w,
        height: h,
        canvasWidth: w,
        canvasHeight: h,
        pixelRatio: 1,
        cacheBust: false,
      })
      if (!blob) return false

      // A blob URL downloads reliably; data: URLs can be blocked by browsers.
      const objectUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = fileName
      link.href = objectUrl
      link.rel = 'noopener'
      document.body.appendChild(link)
      link.click()
      link.remove()
      setTimeout(() => URL.revokeObjectURL(objectUrl), 20000)
      return true
    } catch (error) {
      console.error('Card export failed', error)
      return false
    } finally {
      if (root) root.unmount()
      if (host) host.remove()
      busy.current = false
      setExporting(false)
    }
  }, [])

  return { exporting, download }
}
