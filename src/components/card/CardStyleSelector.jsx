import { CARD_STYLES } from '../../constants/cardStudio'

export default function CardStyleSelector({ style, onChange }) {
  return (
    <div className="control-block">
      <div className="control-heading"><div><span>Design</span><h3>Card style</h3></div></div>
      <div className="style-grid" role="radiogroup" aria-label="Card style">
        {CARD_STYLES.map((item) => (
          <button
            type="button"
            role="radio"
            aria-checked={style === item.id}
            key={item.id}
            className={`style-option style-${item.id} ${style === item.id ? 'active' : ''}`}
            onClick={() => onChange(item.id)}
          >
            <span className="style-swatch"><i /><b /></span>
            <span><strong>{item.name}</strong><small>{item.description}</small></span>
          </button>
        ))}
      </div>
    </div>
  )
}
