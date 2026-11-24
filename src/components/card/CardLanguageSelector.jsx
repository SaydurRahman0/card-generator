import { memo } from 'react'

function Segmented({ value, onChange, options, ariaLabel }) {
  return (
    <div className="segmented" role="group" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          type="button"
          key={option.id}
          aria-pressed={value === option.id}
          className={value === option.id ? 'active' : ''}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

function CardLanguageSelector({ ui, labelLanguage, numberLanguage, onLabelLanguage, onNumberLanguage }) {
  return (
    <div className="control-block language-block">
      <div className="control-heading">
        <div><span>{ui.sectionLanguage}</span><h3>{ui.languageTitle}</h3></div>
      </div>

      <div className="language-rows">
        <div className="language-row">
          <span className="language-row-label">{ui.labelsLabel}</span>
          <Segmented
            value={labelLanguage}
            onChange={onLabelLanguage}
            ariaLabel={ui.labelsLabel}
            options={[
              { id: 'en', label: 'English' },
              { id: 'bn', label: 'বাংলা' },
            ]}
          />
        </div>
        <div className="language-row">
          <span className="language-row-label">{ui.numbersLabel}</span>
          <Segmented
            value={numberLanguage}
            onChange={onNumberLanguage}
            ariaLabel={ui.numbersLabel}
            options={[
              { id: 'en', label: '123' },
              { id: 'bn', label: '১২৩' },
            ]}
          />
        </div>
      </div>

      <p className="control-hint">{ui.languageHint}</p>
    </div>
  )
}

export default memo(CardLanguageSelector)
