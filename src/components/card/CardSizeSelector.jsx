import { memo } from 'react'
import { CARD_SIZES } from '../../constants/cardStudio'

function CardSizeSelector({ preset, width, height, onSelect, onDimension, ui }) {
  const valid = Number(width) >= 100 && Number(height) >= 100
  const presetLabel = preset === 'Custom' ? ui.custom : preset

  return (
    <div className="control-block size-block">
      <div className="control-heading">
        <div><span>{ui.sectionDimensions}</span><h3>{ui.sizeTitle}</h3></div>
        <strong className="size-summary">
          {presetLabel} · {valid ? `${width} × ${height}` : ui.setSize} px
        </strong>
      </div>

      <div className="size-grid" role="radiogroup" aria-label={ui.sizeTitle}>
        {[...Object.keys(CARD_SIZES), 'Custom'].map((name) => (
          <button
            type="button"
            role="radio"
            aria-checked={preset === name}
            key={name}
            className={preset === name ? 'active' : ''}
            onClick={() => onSelect(name)}
          >
            <i className={`ratio-shape ratio-${name === 'Custom' ? 'custom' : name.replace(':', '-')}`} aria-hidden="true">
              {name === 'Custom' ? '+' : ''}
            </i>
            <span>{name === 'Custom' ? ui.custom : name}</span>
          </button>
        ))}
      </div>

      {preset === 'Custom' && (
        <div className="custom-size">
          <label>
            <span>{ui.width}</span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={width}
              onChange={(event) => onDimension('width', event.target.value)}
            />
          </label>
          <b aria-hidden="true">×</b>
          <label>
            <span>{ui.height}</span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={height}
              onChange={(event) => onDimension('height', event.target.value)}
            />
          </label>
        </div>
      )}
    </div>
  )
}

export default memo(CardSizeSelector)
