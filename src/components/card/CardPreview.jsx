import GeneratedCard from './GeneratedCard'

export default function CardPreview({ form, style, colors, width, height, exportRef, exportMode = false }) {
  const valid = Number(width) >= 100 && Number(height) >= 100
  return (
    <div className="preview-wrap">
      <div className="preview-meta">
        <span>Live preview</span>
        <strong>{valid ? `${width} × ${height} px` : 'Invalid size'}</strong>
      </div>
      <div className="preview-stage">
        <div
          className="preview-frame"
          style={{ aspectRatio: `${valid ? width : 16} / ${valid ? height : 9}` }}
        >
          <GeneratedCard
            form={form}
            style={style}
            colors={colors}
            width={valid ? width : 1920}
            height={valid ? height : 1080}
            cardRef={exportMode ? exportRef : undefined}
          />
        </div>
      </div>
    </div>
  )
}
