import { memo } from 'react'
import { CARD_TEMPLATES } from '../../constants/cardStudio'

function Swatch({ id }) {
  return (
    <span className={`style-swatch swatch-${id}`} aria-hidden="true">
      <i /><b /><em />
    </span>
  )
}

function CardStyleSelector({ templateId, onChange, ui, labelLanguage }) {
  return (
    <div className="control-block">
      <div className="control-heading">
        <div><span>{ui.sectionDesign}</span><h3>{ui.styleTitle}</h3></div>
      </div>
      <div className="style-grid" role="radiogroup" aria-label={ui.styleTitle}>
        {CARD_TEMPLATES.map((template) => {
          const active = templateId === template.id
          return (
            <button
              type="button"
              role="radio"
              aria-checked={active}
              key={template.id}
              className={`style-option ${active ? 'active' : ''}`}
              onClick={() => onChange(template.id)}
            >
              <Swatch id={template.id} />
              <span className="style-meta">
                <strong>{labelLanguage === 'bn' ? template.nameBn : template.name}</strong>
                <small>{labelLanguage === 'bn' ? template.descriptionBn : template.description}</small>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default memo(CardStyleSelector)
