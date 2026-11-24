import OrganizationFields from './OrganizationFields'
import PersonalInformationFields from './PersonalInformationFields'
import Button from '../ui/Button'

export default function CardInformationForm({
  form,
  errors,
  photoError,
  updateField,
  updatePhoto,
  onGenerate,
  ui,
  labelLanguage,
}) {
  return (
    <form onSubmit={(event) => { event.preventDefault(); onGenerate() }}>
      <OrganizationFields
        form={form}
        errors={errors}
        onChange={updateField}
        title={ui.sectionOrganization}
        fields={ui.fields}
        errorTexts={ui.errors}
      />
      <PersonalInformationFields
        form={form}
        errors={errors}
        photoError={photoError}
        onChange={updateField}
        onPhotoChange={updatePhoto}
        title={ui.sectionPersonal}
        fields={ui.fields}
        errorTexts={ui.errors}
        notices={ui.notices}
        removeLabel={ui.removePhoto}
        labelLanguage={labelLanguage}
      />
      <Button type="submit" variant="primary" className="generate-full">
        <span className="button-spark" aria-hidden="true">✦</span> {ui.generate}
      </Button>
    </form>
  )
}
