import { useState } from 'react'

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

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }))
  }

  const updatePhoto = (file, remove = false) => {
    if (remove) {
      setForm((current) => ({ ...current, photo: '' }))
      setPhotoError('')
      return
    }
    if (!file) return
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setPhotoError('Choose a JPG, PNG, or WebP image.')
      return
    }
    if (file.size > 8 * 1024 * 1024) {
      setPhotoError('Choose an image smaller than 8 MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setForm((current) => ({ ...current, photo: reader.result }))
      }
    }
    reader.onerror = () => {
      setPhotoError('This image could not be opened. Please choose another one.')
    }
    setPhotoError('')
    reader.readAsDataURL(file)
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.organization.trim()) nextErrors.organization = 'Organization name is required'
    if (!form.cardTitle.trim()) nextErrors.cardTitle = 'Card title is required'
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const reset = () => {
    setForm(INITIAL_FORM)
    setErrors({})
    setPhotoError('')
  }

  return { form, errors, photoError, updateField, updatePhoto, validate, reset }
}
