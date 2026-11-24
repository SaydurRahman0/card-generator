import { useCallback, useState } from 'react'
import {
  CARD_SIZES,
  DEFAULT_COLORS,
  DEFAULT_LABEL_LANGUAGE,
  DEFAULT_NUMBER_LANGUAGE,
  DEFAULT_SIZE,
  DEFAULT_TEMPLATE,
} from '../constants/cardStudio'
import { toEnglishDigits } from '../utils/text'

function clampDigits(raw) {
  return toEnglishDigits(String(raw ?? '')).replace(/\D/g, '').slice(0, 5)
}

export function useCardCustomization() {
  const [templateId, setTemplateId] = useState(DEFAULT_TEMPLATE)
  const [colors, setColors] = useState(DEFAULT_COLORS)
  const [preset, setPreset] = useState(DEFAULT_SIZE)
  const [width, setWidth] = useState(CARD_SIZES[DEFAULT_SIZE].width)
  const [height, setHeight] = useState(CARD_SIZES[DEFAULT_SIZE].height)
  const [labelLanguage, setLabelLanguage] = useState(DEFAULT_LABEL_LANGUAGE)
  const [numberLanguage, setNumberLanguage] = useState(DEFAULT_NUMBER_LANGUAGE)

  const selectSize = useCallback((name) => {
    setPreset(name)
    if (name !== 'Custom' && CARD_SIZES[name]) {
      setWidth(CARD_SIZES[name].width)
      setHeight(CARD_SIZES[name].height)
    }
  }, [])

  const updateDimension = useCallback((axis, value) => {
    const digits = clampDigits(value)
    const next = digits === '' ? '' : Number(digits)
    if (axis === 'width') setWidth(next)
    else setHeight(next)
    setPreset('Custom')
  }, [])

  const reset = useCallback(() => {
    setTemplateId(DEFAULT_TEMPLATE)
    setColors(DEFAULT_COLORS)
    setPreset(DEFAULT_SIZE)
    setWidth(CARD_SIZES[DEFAULT_SIZE].width)
    setHeight(CARD_SIZES[DEFAULT_SIZE].height)
    setLabelLanguage(DEFAULT_LABEL_LANGUAGE)
    setNumberLanguage(DEFAULT_NUMBER_LANGUAGE)
  }, [])

  return {
    templateId,
    setTemplateId,
    colors,
    setColors,
    preset,
    width,
    height,
    labelLanguage,
    setLabelLanguage,
    numberLanguage,
    setNumberLanguage,
    selectSize,
    updateDimension,
    reset,
  }
}
