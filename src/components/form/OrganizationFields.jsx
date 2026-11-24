import { memo } from 'react'
import Input from '../ui/Input'

function OrganizationFields({ form, errors, onChange, title, fields, errorTexts }) {
  return (
    <>
      <div className="form-section-title"><span>{title}</span></div>
      <div className="form-grid">
        <Input
          label={fields.organization.label}
          name="organization"
          value={form.organization}
          onChange={onChange}
          error={errors.organization ? errorTexts[errors.organization] : ''}
          required
          placeholder={fields.organization.placeholder}
          enterKeyHint="next"
        />
        <Input
          label={fields.cardTitle.label}
          name="cardTitle"
          value={form.cardTitle}
          onChange={onChange}
          error={errors.cardTitle ? errorTexts[errors.cardTitle] : ''}
          required
          placeholder={fields.cardTitle.placeholder}
          enterKeyHint="next"
        />
      </div>
    </>
  )
}

export default memo(OrganizationFields)
