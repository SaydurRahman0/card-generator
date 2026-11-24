export const CARD_SIZES = {
  '16:9': { width: 1920, height: 1080 },
  '4:3': { width: 1600, height: 1200 },
  '1:1': { width: 1080, height: 1080 },
  '3:4': { width: 1080, height: 1440 },
  '9:16': { width: 1080, height: 1920 },
}

export const DEFAULT_SIZE = '16:9'

export const CARD_TEMPLATES = [
  { id: 'atelier', name: 'Atelier', nameBn: 'অ্যাটেলিয়ার', description: 'Premium minimal', descriptionBn: 'মিনিমাল প্রিমিয়াম', tone: 'light' },
  { id: 'noir', name: 'Noir Luxe', nameBn: 'নোয়ার লাক্স', description: 'Luxury gold', descriptionBn: 'বিলাসবহুল গোল্ড', tone: 'dark' },
  { id: 'prism', name: 'Prism', nameBn: 'প্রিজম', description: 'Modern gradient', descriptionBn: 'আধুনিক গ্রেডিয়েন্ট', tone: 'dark' },
  { id: 'registry', name: 'Registry', nameBn: 'রেজিস্ট্রি', description: 'Professional ID', descriptionBn: 'পেশাদার আইডি', tone: 'light' },
  { id: 'kinetic', name: 'Kinetic', nameBn: 'কাইনেটিক', description: 'Creative abstract', descriptionBn: 'সৃজনশীল অ্যাবস্ট্রাক্ট', tone: 'dark' },
  { id: 'editorial', name: 'Editorial', nameBn: 'এডিটোরিয়াল', description: 'Magazine layout', descriptionBn: 'ম্যাগাজিন লেআউট', tone: 'light' },
  { id: 'aurora', name: 'Aurora', nameBn: 'অরোরা', description: 'Glass modern', descriptionBn: 'গ্লাস মডার্ন', tone: 'dark' },
]

export const DEFAULT_TEMPLATE = 'atelier'

export const COLOR_PALETTES = [
  {
    id: 'midnight',
    name: 'Midnight Blue',
    nameBn: 'মিডনাইট ব্লু',
    colors: { primary: '#141f38', secondary: '#2c4a7c', accent: '#a6c6ff', background: '#eef3fa', text: '#f7fbff' },
  },
  {
    id: 'royal',
    name: 'Royal Purple',
    nameBn: 'রয়েল পার্পল',
    colors: { primary: '#2a2050', secondary: '#6a4fa0', accent: '#c9b2ff', background: '#f4f0fa', text: '#fdfbff' },
  },
  {
    id: 'emerald',
    name: 'Emerald',
    nameBn: 'এমারেল্ড',
    colors: { primary: '#103a30', secondary: '#1c6a53', accent: '#8fd8b8', background: '#f1f7f2', text: '#f6fffa' },
  },
  {
    id: 'ocean',
    name: 'Ocean',
    nameBn: 'ওশান',
    colors: { primary: '#0e2f45', secondary: '#176b78', accent: '#78d6d4', background: '#eef7f7', text: '#f4ffff' },
  },
  {
    id: 'crimson',
    name: 'Crimson',
    nameBn: 'ক্রিমসন',
    colors: { primary: '#4a1f26', secondary: '#8f3b3f', accent: '#e9b3a4', background: '#f8efec', text: '#fff5ef' },
  },
  {
    id: 'black-gold',
    name: 'Black & Gold',
    nameBn: 'ব্ল্যাক অ্যান্ড গোল্ড',
    colors: { primary: '#131313', secondary: '#5a4a2a', accent: '#c9a24a', background: '#f6f1e8', text: '#f4e8ce' },
  },
  {
    id: 'premium-white',
    name: 'Premium White',
    nameBn: 'প্রিমিয়াম হোয়াইট',
    colors: { primary: '#2b3346', secondary: '#b5a58a', accent: '#a37f45', background: '#faf8f3', text: '#f8f4ea' },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    nameBn: 'সানসেট',
    colors: { primary: '#4a2325', secondary: '#a94a3e', accent: '#f0aa78', background: '#fdf1e6', text: '#fff8f0' },
  },
]

export const DEFAULT_COLORS = COLOR_PALETTES[0].colors

export const DEFAULT_LABEL_LANGUAGE = 'en'
export const DEFAULT_NUMBER_LANGUAGE = 'en'

export const NUMBER_FORMATS = [
  { id: 'en', sample: '0123456789' },
  { id: 'bn', sample: '০১২৩৪৫৬৭৮৯' },
]

export const MAX_PIXELS = 10000
export const MIN_PIXELS = 100
