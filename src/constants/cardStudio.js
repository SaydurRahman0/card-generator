export const CARD_SIZES = {
  '16:9': { width: 1920, height: 1080 },
  '4:3': { width: 1600, height: 1200 },
  '1:1': { width: 1080, height: 1080 },
  '3:4': { width: 1080, height: 1440 },
  '9:16': { width: 1080, height: 1920 },
}

export const CARD_STYLES = [
  { id: 'modern', name: 'Modern', description: 'Bold and balanced' },
  { id: 'minimal', name: 'Minimal', description: 'Clean and precise' },
  { id: 'gradient', name: 'Gradient', description: 'Polished depth' },
  { id: 'elegant', name: 'Elegant', description: 'Formal and refined' },
  { id: 'glass', name: 'Glass', description: 'Soft translucency' },
]

export const DEFAULT_COLORS = {
  primary: '#1d2d54',
  secondary: '#3f5fa5',
  accent: '#79a9ff',
  background: '#eff3fb',
  text: '#ffffff',
}

export const COLOR_PALETTES = [
  { name: 'Midnight', colors: { primary: '#14213d', secondary: '#315a85', accent: '#a8c8ff', background: '#edf3fb', text: '#ffffff' } },
  { name: 'Royal Purple', colors: { primary: '#2f245b', secondary: '#6d50a1', accent: '#c2a8ff', background: '#f1edfa', text: '#ffffff' } },
  { name: 'Ocean', colors: { primary: '#123047', secondary: '#1b7a84', accent: '#67d8d0', background: '#edf8f7', text: '#ffffff' } },
  { name: 'Emerald', colors: { primary: '#12382f', secondary: '#1d7659', accent: '#77d5ad', background: '#edf7f2', text: '#ffffff' } },
  { name: 'Crimson', colors: { primary: '#54262d', secondary: '#a74448', accent: '#f2a0a1', background: '#faf1f0', text: '#fffaf5' } },
  { name: 'Black & Gold', colors: { primary: '#171717', secondary: '#5d4a25', accent: '#d3b15f', background: '#f5efe2', text: '#fdf8e9' } },
  { name: 'Clean White', colors: { primary: '#ffffff', secondary: '#dde5ef', accent: '#4c72b8', background: '#f7f9fc', text: '#1c2740' } },
  { name: 'Sunset', colors: { primary: '#7b3b2a', secondary: '#c75d45', accent: '#f2a675', background: '#fff4e9', text: '#fffaf4' } },
]
