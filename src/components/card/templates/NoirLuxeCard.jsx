import { Bn, Label, Mark, Photo } from './parts'

export default function NoirLuxeCard({ card }) {
  const { labels } = card
  return (
    <>
      <span className="n-border n-border-outer" aria-hidden="true" />
      <span className="n-border n-border-inner" aria-hidden="true" />
      <span className="n-corner n-corner-a" aria-hidden="true" />
      <span className="n-corner n-corner-b" aria-hidden="true" />
      <span className="n-corner n-corner-c" aria-hidden="true" />
      <span className="n-corner n-corner-d" aria-hidden="true" />

      <header className="n-head">
        <span className="n-emblem"><Mark variant="diamond" /></span>
        <Bn as="p" className="n-org" value={card.organization} />
        <Bn as="p" className="n-type" value={card.cardTitle} />
      </header>

      <div className="n-body">
        <div className="n-portrait">
          <span className="n-portrait-ring" aria-hidden="true" />
          <Photo card={card} shape="arch" className="n-photo" />
        </div>

        <div className="n-main">
          <Label className="n-kicker" value={labels.cardholder} />
          <Bn as="h2" className="n-name" value={card.fullName} />
          <span className="n-rule" aria-hidden="true"><i /></span>

          <div className="n-details">
            <div className="n-detail">
              <Label className="n-key" value={labels.age} />
              <Bn as="strong" className="n-val" value={card.age || '—'} />
            </div>
            <div className="n-detail">
              <Label className="n-key" value={labels.bloodGroup} />
              <Bn as="strong" className="n-val n-val-gold" value={card.bloodGroup || '—'} />
            </div>
            <div className="n-detail">
              <Label className="n-key" value={labels.mobile} />
              <Bn as="strong" className="n-val n-nums" value={card.mobile || '—'} />
            </div>
          </div>

          <div className="n-address">
            <Label className="n-key" value={labels.address} />
            <Bn as="p" className="n-address-text" value={card.address || '—'} />
          </div>
        </div>
      </div>

      <footer className="n-foot">
        <span className="n-foot-line" aria-hidden="true" />
        <Bn as="span" className="n-foot-id" value={`${labels.memberNo} ${card.memberId}`} />
        <span className="n-foot-diamond" aria-hidden="true" />
        <Bn as="span" className="n-foot-note" value={labels.official} />
        <span className="n-foot-line" aria-hidden="true" />
      </footer>
    </>
  )
}
