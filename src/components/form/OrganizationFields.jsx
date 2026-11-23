import Input from '../ui/Input'

export default function OrganizationFields({ form, errors, onChange }) {
  return (
    <>
      <div className="form-section-title"><span>Organization</span></div>
      <div className="form-grid">
        <Input label="Organization / Foundation Name" name="organization" value={form.organization} onChange={onChange} error={errors.organization} required placeholder="Enter organization name" />
        <Input label="Card Title / Card Type" name="cardTitle" value={form.cardTitle} onChange={onChange} error={errors.cardTitle} required placeholder="Blood Donor Card" />
      </div>
    </>
  )
}
