import { Bn, Label, Photo } from './parts'

export default function EditorialCard({ card }) {
  const { labels } = card
  return (
    <>
      <aside className="e-rail">
        <Bn as="p" className="e-rail-org" value={card.organization} />
        <span className="e-rail-mark" aria-hidden="true">“</span>
        <span className="e-rail-photo-wrap">
          <Photo card={card} className="e-photo" />
        </span>
      </aside>

      <div className="e-main">
        <header className="e-head">
          <div className="e-head-copy">
            <Bn as="span" className="e-issue" value={`${labels.profile} — ${card.memberId}`} />
            <Bn as="p" className="e-type" value={card.cardTitle} />
          </div>
          <span className="e-quote" aria-hidden="true">“</span>
        </header>

        <Bn as="h2" className="e-name" value={card.fullName} />
        <span className="e-name-rule" aria-hidden="true" />

        <div className="e-rows">
          <div className="e-row">
            <Label className="e-row-label" value={labels.age} />
            <span className="e-dots" aria-hidden="true" />
            <Bn as="strong" className="e-row-value" value={card.age || '—'} />
          </div>
          <div className="e-row">
            <Label className="e-row-label" value={labels.bloodGroup} />
            <span className="e-dots" aria-hidden="true" />
            <Bn as="strong" className="e-row-value" value={card.bloodGroup || '—'} />
          </div>
          <div className="e-row">
            <Label className="e-row-label" value={labels.mobile} />
            <span className="e-dots" aria-hidden="true" />
            <Bn as="strong" className="e-row-value e-nums" value={card.mobile || '—'} />
          </div>
          <div className="e-row">
            <Label className="e-row-label" value={labels.address} />
            <span className="e-dots" aria-hidden="true" />
            <Bn as="strong" className="e-row-value e-row-address" value={card.address || '—'} />
          </div>
        </div>

        <footer className="e-foot">
          <Bn as="span" value={`${labels.issued} ${card.organization}`} />
          <span className="e-foot-no">{card.memberId}</span>
        </footer>
      </div>
    </>
  )
}
