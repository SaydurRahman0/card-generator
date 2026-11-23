import { useState } from 'react'
import { CARD_SIZES, DEFAULT_COLORS } from '../constants/cardStudio'

export function useCardCustomization() {
  const [style, setStyle] = useState('modern')
  const [colors, setColors] = useState(DEFAULT_COLORS)
  const [preset, setPreset] = useState('16:9')
  const [width, setWidth] = useState(CARD_SIZES['16:9'].width)
  const [height, setHeight] = useState(CARD_SIZES['16:9'].height)

  const selectSize = (name) => {
    setPreset(name)
    if (name !== 'Custom') {
      setWidth(CARD_SIZES[name].width)
      setHeight(CARD_SIZES[name].height)
    }
  }

  const updateDimension = (axis, value) => {
    const cleaned = String(value).replace(/\D/g, '').slice(0, 5)
    if (axis === 'width') setWidth(cleaned === '' ? '' : Number(cleaned))
    else setHeight(cleaned === '' ? '' : Number(cleaned))
  }

  const reset = () => {
    setStyle('modern')
    setColors(DEFAULT_COLORS)
    setPreset('16:9')
    setWidth(CARD_SIZES['16:9'].width)
    setHeight(CARD_SIZES['16:9'].height)
  }

  return {
    style, setStyle, colors, setColors,
    preset, setPreset, width, height,
    selectSize, updateDimension, reset,
  }
}
