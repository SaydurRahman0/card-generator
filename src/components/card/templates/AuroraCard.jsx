import { Bn, Label, Photo } from './parts'

export default function AuroraCard({ card }) {
  const { labels } = card
  return (
    <>
      <span className="u-glow u-glow-a" aria-hidden="true" />
      <span className="u-glow u-glow-b" aria-hidden="true" />
      <span className="u-grid" aria-hidden="true" />

      <section className="u-panel">
        <header className="u-head">
          <span className="u-dot" aria-hidden="true" />
          <Bn as="p" className="u-org" value={card.organization} />
        </header>
        <Bn as="p" className="u-type" value={card.cardTitle} />
        <Bn as="h2" className="u-name" value={card.fullName} />
        <span className="u-rule" aria-hidden="true" />

        <div className="u-details">
          <div className="u-cell">
            <Label value={labels.age} />
            <Bn as="strong" className="u-value" value={card.age || '—'} />
          </div>
          <div className="u-cell">
            <Label value={labels.bloodGroup} />
            <Bn as="strong" className="u-value" value={card.bloodGroup || '—'} />
          </div>
          <div className="u-cell">
            <Label value={labels.mobile} />
            <Bn as="strong" className="u-value u-nums" value={card.mobile || '—'} />
          </div>
          <div className="u-cell u-cell-address">
            <Label value={labels.address} />
            <Bn as="strong" className="u-value u-address" value={card.address || '—'} />
          </div>
        </div>

        <Bn as="span" className="u-watermark" value={card.initials} aria-hidden="true" />

        <footer className="u-foot">
          <Bn as="span" className="u-foot-note" value={labels.official} />
          <span className="u-foot-id">{card.memberId}</span>
        </footer>
      </section>

      <div className="u-side">
        <span className="u-photo-shell">
          <span className="u-photo-glow" aria-hidden="true" />
          <Photo card={card} shape="squircle" className="u-photo" />
        </span>
        <span className="u-blood">
          <Bn as="span" className="u-blood-text" value={card.bloodGroup || labels.bloodGroup} />
        </span>
      </div>
    </>
  )
}
