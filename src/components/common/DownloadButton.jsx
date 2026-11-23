import Button from '../ui/Button'

export default function DownloadButton({ disabled, exporting, onClick }) {
  return (
    <Button type="button" variant="download" className="download-full" disabled={disabled} onClick={onClick}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
      {exporting ? 'Preparing PNG...' : 'Download PNG'}
    </Button>
  )
}
