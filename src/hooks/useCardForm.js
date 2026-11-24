import { useCallback, useState } from 'react'
import { readPhoto } from '../utils/image'

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE = 8 * 1024 * 1024

export const INITIAL_FORM = {
  organization: '',
  cardTitle: '',
  fullName: '',
  age: '',
  bloodGroup: '',
  address: '',
  mobile: '',
  photo: '',
}

export function useCardForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [photoError, setPhotoError] = useState('')

  const updateField = useCallback((event) => {
    const { name, value } = event.target
    setForm((current) => (current[name] === value ? current : { ...current, [name]: value }))
    setErrors((current) => (current[name] ? { ...current, [name]: '' } : current))
  }, [])

  const updatePhoto = useCallback(async (file, remove = false) => {
    if (remove) {
      setForm((current) => ({ ...current, photo: '' }))
      setPhotoError('')
      return
    }
    if (!file) return
    if (!ALLOWED_TYPES.includes(file.type)) {
      setPhotoError('badType')
      return
    }
    if (file.size > MAX_SIZE) {
      setPhotoError('tooLarge')
      return
    }

    setPhotoError('')
    try {
      const dataUrl = await readPhoto(file)
      if (dataUrl) setForm((current) => ({ ...current, photo: dataUrl }))
    } catch {
      setPhotoError('unreadable')
    }
  }, [])

  const validate = useCallback(() => {
    const nextErrors = {}
    if (!form.organization.trim()) nextErrors.organization = 'organizationRequired'
    if (!form.cardTitle.trim()) nextErrors.cardTitle = 'cardTitleRequired'
    if (!form.fullName.trim()) nextErrors.fullName = 'fullNameRequired'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }, [form.organization, form.cardTitle, form.fullName])

  const reset = useCallback(() => {
    setForm(INITIAL_FORM)
    setErrors({})
    setPhotoError('')
  }, [])

  return { form, errors, photoError, updateField, updatePhoto, validate, reset }
}
