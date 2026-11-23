import Input from '../ui/Input'
import Select from '../ui/Select'

export default function PersonalInformationFields({ form, errors = {}, photoError, onChange, onPhotoChange }) {
  return (
    <>
      <div className="form-section-title"><span>Personal information</span></div>
      <div className="form-grid">
        <Input label="Full Name" name="fullName" value={form.fullName} onChange={onChange} error={errors.fullName} required placeholder="Enter full name" />
        <Input label="Age" name="age" value={form.age} onChange={onChange} type="number" min="0" max="150" placeholder="Enter age" />
        <Select label="Blood Group" name="bloodGroup" value={form.bloodGroup} onChange={onChange} options={['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']} placeholder="Select blood group" />
        <Input label="Mobile Number" name="mobile" value={form.mobile} onChange={onChange} type="tel" placeholder="Enter mobile number" />
        <Input label="Address" name="address" value={form.address} onChange={onChange} multiline rows={3} placeholder="Enter address" />
        <div className="photo-upload">
          <label className="field-label" htmlFor="cardholder-photo">Cardholder photo</label>
          <div className="photo-upload-row">
            <div className="photo-thumbnail">
              {form.photo ? <img src={form.photo} alt="Selected cardholder" /> : <span aria-hidden="true">+</span>}
            </div>
            <div className="photo-picker">
              <input
                id="cardholder-photo"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(event) => {
                  onPhotoChange(event.target.files?.[0])
                  event.target.value = ''
                }}
              />
              <small>JPG, PNG or WebP · up to 8 MB</small>
            </div>
            {form.photo && (
              <button type="button" className="remove-photo" onClick={() => onPhotoChange(null, true)}>
                Remove
              </button>
            )}
          </div>
          {photoError && <span className="field-error" role="status">{photoError}</span>}
        </div>
      </div>
    </>
  )
}
