import { Bn, Label, Photo } from './parts'

export default function KineticCard({ card }) {
  const { labels } = card
  return (
    <>
      <span className="k-disc" aria-hidden="true" />
      <span className="k-disc-ring" aria-hidden="true" />
      <span className="k-slab" aria-hidden="true" />
      <span className="k-dots" aria-hidden="true" />

      <div className="k-rail" aria-hidden="true">
        <span>{labels.member} · {card.memberId}</span>
      </div>

      <header className="k-head">
        <span className="k-mark" aria-hidden="true"><i /><i /><i /></span>
        <Bn as="p" className="k-org" value={card.organization} />
        <Bn as="p" className="k-type" value={card.cardTitle} />
      </header>

      <div className="k-portrait">
        <Photo card={card} className="k-photo" />
        <span className="k-photo-ring" aria-hidden="true" />
      </div>

      <div className="k-blood">
        <Label className="k-blood-label" value={labels.bloodGroup} />
        <Bn as="strong" className="k-blood-value" value={card.bloodGroup || '—'} />
      </div>

      <div className="k-identity">
        <Label className="k-kicker" value={labels.cardholder} />
        <Bn as="h2" className="k-name" value={card.fullName} />
        <span className="k-underline" aria-hidden="true" />
      </div>

      <div className="k-chips">
        <div className="k-chip">
          <Label value={labels.age} />
          <Bn as="strong" className="k-chip-value" value={card.age || '—'} />
        </div>
        <div className="k-chip">
          <Label value={labels.mobile} />
          <Bn as="strong" className="k-chip-value k-nums" value={card.mobile || '—'} />
        </div>
      </div>

      <div className="k-address">
        <Label value={labels.address} />
        <Bn as="p" className="k-address-text" value={card.address || '—'} />
      </div>
    </>
  )
}
