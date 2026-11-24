import { memo } from 'react'
import Input from '../ui/Input'
import Select from '../ui/Select'
import { BLOOD_GROUPS, BLOOD_GROUP_LABELS } from '../../constants/translations'

function PersonalInformationFields({
  form,
  errors,
  photoError,
  onChange,
  onPhotoChange,
  title,
  fields,
  errorTexts,
  notices,
  removeLabel,
  labelLanguage,
}) {
  return (
    <>
      <div className="form-section-title"><span>{title}</span></div>
      <div className="form-grid">
        <Input
          label={fields.fullName.label}
          name="fullName"
          value={form.fullName}
          onChange={onChange}
          error={errors.fullName ? errorTexts[errors.fullName] : ''}
          required
          placeholder={fields.fullName.placeholder}
          enterKeyHint="next"
        />
        <Input
          label={fields.age.label}
          name="age"
          value={form.age}
          onChange={onChange}
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder={fields.age.placeholder}
          enterKeyHint="next"
        />
        <Select
          label={fields.bloodGroup.label}
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={onChange}
          options={BLOOD_GROUPS}
          optionLabels={BLOOD_GROUP_LABELS[labelLanguage]}
          placeholder={fields.bloodGroup.placeholder}
        />
        <Input
          label={fields.mobile.label}
          name="mobile"
          value={form.mobile}
          onChange={onChange}
          type="tel"
          placeholder={fields.mobile.placeholder}
          enterKeyHint="next"
        />
        <Input
          label={fields.address.label}
          name="address"
          value={form.address}
          onChange={onChange}
          multiline
          rows={3}
          placeholder={fields.address.placeholder}
        />
        <div className="photo-upload">
          <span className="field-label" id="photo-label">{fields.photo.label}</span>
          <div className="photo-upload-row">
            <div className="photo-thumbnail">
              {form.photo ? <img src={form.photo} alt="" /> : <span aria-hidden="true">+</span>}
            </div>
            <div className="photo-picker">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                aria-labelledby="photo-label"
                onChange={(event) => {
                  onPhotoChange(event.target.files?.[0])
                  event.target.value = ''
                }}
              />
              <small>{fields.photo.hint}</small>
            </div>
            {form.photo && (
              <button type="button" className="remove-photo" onClick={() => onPhotoChange(null, true)}>
                {removeLabel}
              </button>
            )}
          </div>
          {photoError && <span className="field-error" role="alert">{notices[photoError]}</span>}
        </div>
      </div>
    </>
  )
}

export default memo(PersonalInformationFields)
