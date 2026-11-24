import { memo } from 'react'
import { COLOR_PALETTES, DEFAULT_COLORS } from '../../constants/cardStudio'

const FIELDS = [
  ['primary', 'Primary'],
  ['secondary', 'Secondary'],
  ['accent', 'Accent'],
  ['background', 'Background'],
  ['text', 'Text'],
]

const FIELD_LABELS_BN = {
  primary: 'প্রাইমারি',
  secondary: 'সেকেন্ডারি',
  accent: 'অ্যাকসেন্ট',
  background: 'ব্যাকগ্রাউন্ড',
  text: 'টেক্সট',
}

function CardColorCustomizer({ colors, onChange, onReset, ui, labelLanguage }) {
  const isActive = (palette) => FIELDS.every(([key]) => (colors[key] || '').toLowerCase() === palette.colors[key].toLowerCase())

  return (
    <div className="control-block color-block">
      <div className="control-heading">
        <div><span>{ui.sectionAppearance}</span><h3>{ui.colorsTitle}</h3></div>
        <button type="button" className="text-button" onClick={onReset}>{ui.resetColors}</button>
      </div>

      <div className="palette-grid" role="group" aria-label={ui.colorsTitle}>
        {COLOR_PALETTES.map((palette) => {
          const active = isActive(palette)
          const name = labelLanguage === 'bn' ? palette.nameBn : palette.name
          return (
            <button
              type="button"
              title={name}
              aria-label={name}
              aria-pressed={active}
              className={`palette-button${active ? ' active' : ''}`}
              key={palette.id}
              onClick={() => onChange(palette.colors)}
            >
              <i style={{ background: palette.colors.primary }} />
              <i style={{ background: palette.colors.secondary }} />
              <i style={{ background: palette.colors.accent }} />
              <i style={{ background: palette.colors.background }} />
            </button>
          )
        })}
      </div>

      <div className="color-pickers">
        {FIELDS.map(([key, label]) => (
          <label key={key} className="color-field">
            <input
              type="color"
              value={colors[key] || DEFAULT_COLORS[key]}
              aria-label={label}
              onChange={(event) => onChange({ ...colors, [key]: event.target.value })}
            />
            <span>{labelLanguage === 'bn' ? FIELD_LABELS_BN[key] : label}</span>
          </label>
        ))}
      </div>

      <p className="control-hint">{ui.paletteTip}</p>
    </div>
  )
}

export default memo(CardColorCustomizer)
