import { memo } from 'react'

const Select = memo(function Select({ label, name, value, onChange, options, placeholder, optionLabels }) {
  const id = `field-${name}`
  return (
    <label className="studio-field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <select id={id} name={name} value={value} onChange={onChange}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {optionLabels?.[option] ?? option}
          </option>
        ))}
      </select>
    </label>
  )
})

export default Select
