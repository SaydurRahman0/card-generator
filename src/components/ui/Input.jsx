import { memo } from 'react'

const Input = memo(function Input({
  label,
  name,
  value,
  onChange,
  error,
  required,
  multiline,
  hint,
  ...props
}) {
  const id = `field-${name}`
  return (
    <label className={`studio-field${multiline ? ' field-wide' : ''}`.trim()} htmlFor={id}>
      <span className="field-label">
        {label}
        {required && <b aria-hidden="true"> *</b>}
      </span>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? 'input-error' : ''}
          aria-invalid={error ? 'true' : undefined}
          dir="auto"
          autoComplete="off"
          {...props}
        />
      ) : (
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? 'input-error' : ''}
          aria-invalid={error ? 'true' : undefined}
          dir="auto"
          autoComplete="off"
          {...props}
        />
      )}
      {hint && <small className="field-hint">{hint}</small>}
      {error && <span className="field-error" role="alert">{error}</span>}
    </label>
  )
})

export default Input
