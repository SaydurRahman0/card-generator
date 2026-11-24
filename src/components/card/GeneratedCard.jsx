import { memo } from 'react'
import { buildCardTheme } from '../../utils/cardData'
import { getCardLayout } from '../../utils/cardHelpers'
import { getTemplateComponent } from './templateRegistry'

/**
 * Memoised so that typing in the form does not repaint the card unless the
 * (deferred) card data or its look actually changed.
 */
const GeneratedCard = memo(function GeneratedCard({
  card,
  templateId,
  colors,
  width,
  height,
  cardRef,
  exportMode = false,
}) {
  const Template = getTemplateComponent(templateId)
  const layout = getCardLayout(width, height)
  const theme = buildCardTheme(colors)
  const style = exportMode
    ? { ...theme, width: `${width}px`, height: `${height}px`, borderRadius: '0px' }
    : theme

  return (
    <article
      ref={cardRef}
      className={`generated-card tpl-${templateId} layout-${layout}`}
      style={style}
      lang={card.labelLanguage === 'bn' ? 'bn' : 'en'}
      aria-label="Card preview"
    >
      <Template card={card} layout={layout} />
    </article>
  )
})

export default GeneratedCard
