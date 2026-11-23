import { COLOR_PALETTES, DEFAULT_COLORS } from '../../constants/cardStudio'

export default function CardColorCustomizer({ colors, onChange, onReset }) {
  const fields = [
    ['primary', 'Primary'],
    ['secondary', 'Secondary'],
    ['accent', 'Accent'],
    ['background', 'Background'],
    ['text', 'Text'],
  ]
  return (
    <div className="control-block color-block">
      <div className="control-heading">
        <div><span>Appearance</span><h3>Card colors</h3></div>
        <button type="button" className="text-button" onClick={onReset}>Reset colors</button>
      </div>
      <div className="palette-grid">
        {COLOR_PALETTES.map((palette) => (
          <button
            type="button"
            title={palette.name}
            aria-label={`Apply ${palette.name} palette`}
            className="palette-button"
            key={palette.name}
            onClick={() => onChange(palette.colors)}
          >
            <i style={{ background: palette.colors.primary }} />
            <i style={{ background: palette.colors.secondary }} />
            <i style={{ background: palette.colors.accent }} />
          </button>
        ))}
      </div>
      <div className="color-pickers">
        {fields.map(([key, label]) => (
          <label key={key} className="color-field">
            <input type="color" value={colors[key] || DEFAULT_COLORS[key]} onChange={(event) => onChange({ ...colors, [key]: event.target.value })} />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
