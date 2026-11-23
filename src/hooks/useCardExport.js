import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'

export function useCardExport() {
  const exportRef = useRef(null)
  const [exporting, setExporting] = useState(false)

  const download = async ({ form, width, height }) => {
    if (!exportRef.current) return false
    setExporting(true)
    try {
      await document.fonts?.ready
      const dataUrl = await toPng(exportRef.current, {
        cacheBust: true,
        pixelRatio: 1,
        width: Number(width),
        height: Number(height),
        canvasWidth: Number(width),
        canvasHeight: Number(height),
      })
      const link = document.createElement('a')
      const sanitize = (value, fallback) => {
        const clean = value.trim().replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '')
        return clean || fallback
      }
      if (!form.fullName.trim()) {
        link.download = 'Custom_Card.png'
      } else {
        link.download = `${sanitize(form.fullName, 'Custom')}_${sanitize(form.cardTitle, 'Card')}.png`
      }
      link.href = dataUrl
      link.click()
      return true
    } catch (error) {
      console.error(error)
      return false
    } finally {
      setExporting(false)
    }
  }

  return { exportRef, exporting, download }
}
