import { Bn, Label, Mark, Photo } from './parts'

export default function RegistryCard({ card }) {
  const { labels } = card
  return (
    <>
      <header className="r-band">
        <div className="r-band-left">
          <span className="r-emblem"><Mark variant="shield" /></span>
          <span className="r-band-copy">
            <Bn as="p" className="r-org" value={card.organization} />
            <Bn as="p" className="r-sub" value={card.cardTitle} />
          </span>
        </div>
        <span className="r-band-id">
          <Label className="r-band-label" value={labels.memberId} />
          <strong className="r-band-value">{card.memberId}</strong>
        </span>
      </header>
      <span className="r-band-accent" aria-hidden="true" />

      <div className="r-body">
        <div className="r-photo-col">
          <span className="r-photo-frame">
            <Photo card={card} className="r-photo" tone="light" />
          </span>
          <span className="r-barcode" aria-hidden="true" />
          <Bn as="span" className="r-serial" value={`${labels.serial} ${card.memberId}`} />
        </div>

        <div className="r-info">
          <div className="r-name-row">
            <Label className="r-role" value={labels.cardholder} />
            <Bn as="h2" className="r-name" value={card.fullName} />
          </div>

          <div className="r-table">
            <div className="r-cell">
              <Label value={labels.age} />
              <Bn as="strong" className="r-value" value={card.age || '—'} />
            </div>
            <div className="r-cell">
              <Label value={labels.bloodGroup} />
              <Bn as="strong" className="r-value" value={card.bloodGroup || '—'} />
            </div>
            <div className="r-cell">
              <Label value={labels.mobile} />
              <Bn as="strong" className="r-value r-nums" value={card.mobile || '—'} />
            </div>
            <div className="r-cell r-cell-address">
              <Label value={labels.address} />
              <Bn as="strong" className="r-value r-address" value={card.address || '—'} />
            </div>
          </div>

          <div className="r-foot">
            <div className="r-sign">
              <span className="r-sign-line" aria-hidden="true" />
              <Bn as="span" className="r-sign-label" value={labels.signature} />
            </div>
            <span className="r-stamp">
              <Bn as="strong" className="r-stamp-value" value={labels.valid} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
