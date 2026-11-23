import { getCardLayout } from '../../utils/cardHelpers'

export default function GeneratedCard({ form, style, colors, width, height, cardRef }) {
  const layout = getCardLayout(width, height)
  const cssVars = {
    '--card-primary': colors.primary,
    '--card-secondary': colors.secondary,
    '--card-accent': colors.accent,
    '--card-background': colors.background,
    '--card-text': colors.text,
    ...(cardRef ? {
      width: `${width}px`,
      height: `${height}px`,
      minWidth: `${width}px`,
      minHeight: `${height}px`,
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
      borderRadius: '0',
    } : {}),
  }

  return (
    <article
      ref={cardRef}
      className={`generated-card style-${style} card-${layout}`}
      style={cssVars}
      aria-label="Generated card preview"
    >
      <div className="template-orbit orbit-a" />
      <div className="template-orbit orbit-b" />
      <header className="generated-header">
        <p className="organization-name">{form.organization || 'Organization Name'}</p>
        <h1 className="card-title">{form.cardTitle || 'Card Title'}</h1>
        <span className="template-status">IDENTITY</span>
      </header>

      <div className="template-rule" />

      <main className="card-content">
        <div className="card-photo-frame">
          {form.photo ? (
            <img className="cardholder-photo" src={form.photo} alt={form.fullName ? `${form.fullName} portrait` : 'Cardholder portrait'} />
          ) : (
            <div className="photo-placeholder" aria-label="No photo selected">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                <circle cx="12" cy="8" r="3.2" />
                <path d="M5.5 20c.7-3.8 2.8-5.7 6.5-5.7s5.8 1.9 6.5 5.7" />
              </svg>
              <span>PHOTO</span>
            </div>
          )}
        </div>

        <section className="card-information">
          <span className="holder-label">Cardholder</span>
          <h2>{form.fullName || 'Full Name'}</h2>
          <div className="template-details">
            <div className="template-field">
              <span>Age</span>
              <strong>{form.age || '—'}</strong>
            </div>
            {form.bloodGroup && (
              <div className="template-blood">
                <span>Blood group</span>
                <strong>{form.bloodGroup}</strong>
              </div>
            )}
            <div className="template-field address-field">
              <span>Address</span>
              <strong>{form.address || '—'}</strong>
            </div>
            <div className="template-field mobile-field">
              <span>Mobile</span>
              <strong>{form.mobile || '—'}</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="template-footer">
        <span>OFFICIAL MEMBER ID</span>
        <span className="footer-line" />
        <span>01</span>
      </footer>
    </article>
  )
}
