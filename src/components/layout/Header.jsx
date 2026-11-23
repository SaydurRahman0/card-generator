function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7 9h4M7 13h7M17 14h.01" />
      <circle cx="17" cy="15" r="1" />
    </svg>
  )
}

export default function Header({ onReset }) {
  return (
    <header className="studio-header">
      <div className="studio-brand">
        <div className="brand-mark"><CardIcon /></div>
        <div>
          <h1>Card Studio</h1>
          <p>Create personalized cards in seconds</p>
        </div>
      </div>
      <div className="header-actions">
        <span className="privacy-chip"><i /> Local & private</span>
        <button type="button" className="reset-link" onClick={onReset}>Reset form</button>
      </div>
    </header>
  )
}
