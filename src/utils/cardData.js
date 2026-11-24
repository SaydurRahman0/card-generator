import { BLOOD_GROUP_LABELS, CARD_LABELS } from '../constants/translations'
import { formatDigits, getInitials } from './text'
import { hasValidContrast, mix, readableOn, toneDown, withAlpha } from './color'

export function buildCardData(form, labelLanguage, numberLanguage) {
  const labels = CARD_LABELS[labelLanguage]
  const organization = form.organization.trim()
  const cardTitle = form.cardTitle.trim()
  const fullName = form.fullName.trim()
  const bloodGroup = form.bloodGroup ? BLOOD_GROUP_LABELS[labelLanguage][form.bloodGroup] ?? form.bloodGroup : ''

  return {
    organization: organization || labels.orgPlaceholder,
    cardTitle: cardTitle || labels.titlePlaceholder,
    fullName: fullName || labels.namePlaceholder,
    age: form.age ? formatDigits(form.age, numberLanguage) : '',
    bloodGroup,
    address: formatDigits(form.address, numberLanguage).trim(),
    mobile: formatDigits(form.mobile, numberLanguage).trim(),
    photo: form.photo || '',
    hasPhoto: Boolean(form.photo),
    initials: getInitials(fullName, labels.member.slice(0, 2)),
    memberId: formatDigits('01', numberLanguage),
    labels,
    labelLanguage,
    numberLanguage,
  }
}

export function buildCardTheme(colors) {
  const { primary, accent, background, text } = colors
  // Dark templates print light text on the secondary colour, so keep it dark
  // enough even when the palette's secondary is a pale tone.
  const secondary = hasValidContrast(colors.secondary, text) ? colors.secondary : toneDown(colors.secondary, 0.42)

  return {
    '--c-primary': primary,
    '--c-secondary': secondary,
    '--c-accent': accent,
    '--c-background': background,
    '--c-text': text,
    '--c-deep': toneDown(primary, 0.4),
    '--c-deeper': toneDown(primary, 0.62),
    '--c-primary-soft': mix(primary, text, 0.66),
    '--c-primary-faint': mix(primary, text, 0.44),
    '--c-primary-line': mix(primary, text, 0.2),
    '--c-paper-soft': mix(background, primary, 0.6),
    '--c-paper-faint': mix(background, primary, 0.44),
    '--c-paper-line': mix(background, primary, 0.15),
    '--c-accent-soft': mix(accent, primary, 0.32),
    '--c-on-accent': readableOn(accent),
    '--c-glow': withAlpha(accent, 0.32),
    '--c-glow-soft': withAlpha(accent, 0.14),
    '--c-haze': withAlpha(text, 0.1),
    '--c-haze-strong': withAlpha(text, 0.18),
    '--c-hairline': withAlpha(text, 0.22),
    '--c-shadow': withAlpha(primary, 0.34),
  }
}
