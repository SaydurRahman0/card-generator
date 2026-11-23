import { CARD_SIZES } from '../../constants/cardStudio'

export default function CardSizeSelector({ preset, width, height, onSelect, onDimension }) {
  const valid = Number(width) >= 100 && Number(height) >= 100
  return (
    <div className="control-block size-block">
      <div className="control-heading">
        <div><span>Dimensions</span><h3>Card size</h3></div>
        <strong className="size-summary">{preset === 'Custom' ? 'Custom' : preset} · {valid ? `${width} × ${height}` : 'Set size'} px</strong>
      </div>
      <div className="size-grid" role="radiogroup" aria-label="Card size">
        {[...Object.keys(CARD_SIZES), 'Custom'].map((name) => (
          <button type="button" role="radio" aria-checked={preset === name} key={name} className={preset === name ? 'active' : ''} onClick={() => onSelect(name)}>
            <i className={`ratio-shape ratio-${name === 'Custom' ? 'custom' : name.replace(':', '-')}`}>{name === 'Custom' ? '+' : ''}</i>
            <span>{name}</span>
          </button>
        ))}
      </div>
      {preset === 'Custom' && (
        <div className="custom-size">
          <label><span>Width (px)</span><input type="number" min="100" max="10000" value={width} onChange={(event) => onDimension('width', event.target.value)} /></label>
          <b>×</b>
          <label><span>Height (px)</span><input type="number" min="100" max="10000" value={height} onChange={(event) => onDimension('height', event.target.value)} /></label>
        </div>
      )}
    </div>
  )
}
