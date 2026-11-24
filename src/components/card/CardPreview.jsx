import { memo, useLayoutEffect, useRef } from 'react'
import GeneratedCard from './GeneratedCard'

const CANVAS_WIDTH = 1200

const CardPreview = memo(function CardPreview({ card, templateId, colors, width, height, ui }) {
  const frameRef = useRef(null)
  const canvasRef = useRef(null)
  const numericWidth = Number(width) || 1920
  const numericHeight = Number(height) || 1080
  const valid = numericWidth >= 100 && numericHeight >= 100
  const safeWidth = valid ? numericWidth : 1920
  const safeHeight = valid ? numericHeight : 1080
  const ratio = safeWidth / safeHeight

  useLayoutEffect(() => {
    const frame = frameRef.current
    const canvas = canvasRef.current
    if (!frame || !canvas) return
    const update = () => {
      canvas.style.transform = `scale(${frame.clientWidth / CANVAS_WIDTH})`
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="preview-wrap">
      <div className="preview-meta">
        <span>{ui.livePreview}</span>
        <strong>{valid ? `${width} × ${height} px` : ui.setSize}</strong>
      </div>
      <div className="preview-stage">
        <div ref={frameRef} className="preview-frame" style={{ '--ratio': String(ratio) }}>
          <div
            ref={canvasRef}
            className="preview-canvas"
            style={{ width: `${CANVAS_WIDTH}px`, height: `${CANVAS_WIDTH / ratio}px` }}
          >
            <GeneratedCard
              card={card}
              templateId={templateId}
              colors={colors}
              width={safeWidth}
              height={safeHeight}
            />
          </div>
        </div>
      </div>
    </div>
  )
})

export default CardPreview
