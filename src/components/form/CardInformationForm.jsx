import OrganizationFields from './OrganizationFields'
import PersonalInformationFields from './PersonalInformationFields'
import Button from '../ui/Button'

export default function CardInformationForm({ form, errors, photoError, updateField, updatePhoto, onGenerate }) {
  return (
    <form onSubmit={(event) => { event.preventDefault(); onGenerate() }}>
      <OrganizationFields form={form} errors={errors} onChange={updateField} />
      <PersonalInformationFields form={form} errors={errors} photoError={photoError} onChange={updateField} onPhotoChange={updatePhoto} />
      <Button type="submit" variant="primary" className="generate-full">
        <span className="button-spark">✦</span> Generate Card
      </Button>
    </form>
  )
}
