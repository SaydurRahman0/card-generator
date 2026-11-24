import { Bn, Label, Mark, Photo } from './parts'

export default function AtelierCard({ card }) {
  const { labels } = card
  return (
    <>
      <span className="a-frame" aria-hidden="true" />
      <span className="a-tick a-tick-a" aria-hidden="true" />
      <span className="a-tick a-tick-b" aria-hidden="true" />

      <header className="a-head">
        <div className="a-brand">
          <span className="a-mark"><Mark variant="ring" /></span>
          <span className="a-brand-copy">
            <Bn as="p" className="a-org" value={card.organization} />
            <Label className="a-eyebrow" value={labels.member} />
          </span>
        </div>
        <div className="a-head-end">
          <span className="a-head-rule" aria-hidden="true" />
          <Bn as="p" className="a-type" value={card.cardTitle} />
        </div>
      </header>

      <div className="a-body">
        <div className="a-identity">
          <Label className="a-kicker" value={labels.cardholder} />
          <Bn as="h2" className="a-name" value={card.fullName} />
          <span className="a-accent" aria-hidden="true" />

          <div className="a-grid">
            <div className="a-cell">
              <Label value={labels.age} />
              <Bn as="strong" className="a-value" value={card.age || '—'} />
            </div>
            <div className="a-cell">
              <Label value={labels.bloodGroup} />
              <Bn as="strong" className="a-value" value={card.bloodGroup || '—'} />
            </div>
            <div className="a-cell">
              <Label value={labels.mobile} />
              <Bn as="strong" className="a-value a-nums" value={card.mobile || '—'} />
            </div>
          </div>

          <div className="a-address">
            <Label value={labels.address} />
            <Bn as="p" className="a-address-text" value={card.address || '—'} />
          </div>
        </div>

        <div className="a-photo-wrap">
          <Photo card={card} className="a-photo" tone="light" />
        </div>
      </div>

      <footer className="a-foot">
        <Bn as="span" className="a-foot-id" value={`${labels.memberNo} · ${card.memberId}`} />
        <span className="a-foot-line" aria-hidden="true" />
        <Bn as="span" className="a-foot-note" value={labels.valid} />
      </footer>
    </>
  )
}
