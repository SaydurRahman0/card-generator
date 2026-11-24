import { Bn, Label, Photo } from './parts'

export default function PrismCard({ card }) {
  const { labels } = card
  return (
    <>
      <span className="p-glow p-glow-a" aria-hidden="true" />
      <span className="p-glow p-glow-b" aria-hidden="true" />
      <span className="p-lines" aria-hidden="true" />

      <header className="p-head">
        <span className="p-pill">
          <i aria-hidden="true" />
          <Bn as="span" value={card.organization} />
        </span>
        <Bn as="span" className="p-type" value={card.cardTitle} />
      </header>

      <div className="p-identity">
        <Label className="p-kicker" value={labels.cardholder} />
        <Bn as="h2" className="p-name" value={card.fullName} />
      </div>

      <div className="p-portrait">
        <Photo card={card} shape="squircle" className="p-photo" />
        <span className="p-mat" aria-hidden="true" />
      </div>

      <div className="p-blood">
        <Label className="p-blood-label" value={labels.bloodGroup} />
        <Bn as="strong" className="p-blood-value" value={card.bloodGroup || '—'} />
      </div>

      <div className="p-bar">
        <div className="p-bar-cell">
          <Label value={labels.mobile} />
          <Bn as="strong" className="p-bar-value p-nums" value={card.mobile || '—'} />
        </div>
        <div className="p-bar-cell p-bar-address">
          <Label value={labels.address} />
          <Bn as="strong" className="p-bar-value p-bar-clamp" value={card.address || '—'} />
        </div>
        <div className="p-bar-cell">
          <Label value={labels.age} />
          <Bn as="strong" className="p-bar-value" value={card.age || '—'} />
        </div>
        <div className="p-bar-id">
          <Bn as="span" value={`${labels.memberNo} ${card.memberId}`} />
        </div>
      </div>
    </>
  )
}
