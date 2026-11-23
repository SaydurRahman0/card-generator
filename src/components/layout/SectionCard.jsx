export default function SectionCard({ children, className = '', labelledBy }) {
  return <section className={`studio-panel ${className}`} aria-labelledby={labelledBy}>{children}</section>
}
