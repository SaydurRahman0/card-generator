import { hasBengali } from '../../../utils/text'

export function withBn(className, value) {
  return hasBengali(value) ? `${className} bn` : className
}

/** Text node that switches to the Bengali stack (and metrics) when needed. */
export function Bn({ as: Tag = 'span', value, className = '', ...rest }) {
  return (
    <Tag className={withBn(className, value)} {...rest}>
      {value}
    </Tag>
  )
}

export function Label({ value, className = '' }) {
  return <Bn as="span" className={`card-label ${className}`.trim()} value={value} />
}

export function Photo({ card, className = '', shape = 'rect', tone = 'dark' }) {
  return (
    <div className={`card-photo photo-${shape} photo-${tone} ${className}`.trim()}>
      {card.hasPhoto ? (
        <img src={card.photo} alt="" />
      ) : (
        <span className="card-monogram" aria-hidden="true">
          {card.initials}
        </span>
      )}
    </div>
  )
}

const MARKS = {
  ring: (
    <>
      <circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 3.4v17.2M3.4 12h17.2" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </>
  ),
  diamond: (
    <>
      <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 7.2 16.8 12 12 16.8 7.2 12Z" fill="currentColor" opacity="0.85" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.6 20 6v6.2c0 4.9-3.3 8.1-8 9.2-4.7-1.1-8-4.3-8-9.2V6Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8.4 12.4l2.5 2.5 4.7-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-8.8 0-15 3.9-15 10.4 0 2 .7 3.8 1.8 5.1C8.9 15.5 12.6 12 17 9.8c-4 2.9-7 6.9-8.2 12.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
}

export function Mark({ variant = 'ring', className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {MARKS[variant] ?? MARKS.ring}
    </svg>
  )
}
