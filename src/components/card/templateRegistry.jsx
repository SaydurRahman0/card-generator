import { CARD_TEMPLATES } from '../../constants/cardStudio'
import AtelierCard from './templates/AtelierCard'
import NoirLuxeCard from './templates/NoirLuxeCard'
import PrismCard from './templates/PrismCard'
import RegistryCard from './templates/RegistryCard'
import KineticCard from './templates/KineticCard'
import EditorialCard from './templates/EditorialCard'
import AuroraCard from './templates/AuroraCard'

const COMPONENTS = {
  atelier: AtelierCard,
  noir: NoirLuxeCard,
  prism: PrismCard,
  registry: RegistryCard,
  kinetic: KineticCard,
  editorial: EditorialCard,
  aurora: AuroraCard,
}

export function getTemplateComponent(id) {
  return COMPONENTS[id] ?? COMPONENTS.atelier
}

export function getTemplateMeta(id) {
  return CARD_TEMPLATES.find((template) => template.id === id) ?? CARD_TEMPLATES[0]
}

export { CARD_TEMPLATES }
