export default function Input({ label, name, value, onChange, error, required, multiline, ...props }) {
  const id = `field-${name}`
  return (
    <label className="studio-field" htmlFor={id}>
      <span className="field-label">{label}{required && <b> *</b>}</span>
      {multiline ? (
        <textarea id={id} name={name} value={value} onChange={onChange} className={error ? 'input-error' : ''} {...props} />
      ) : (
        <input id={id} name={name} value={value} onChange={onChange} className={error ? 'input-error' : ''} {...props} />
      )}
      {error && <span className="field-error">{error}</span>}
    </label>
  )
}
