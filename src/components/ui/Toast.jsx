export default function Toast({ message }) {
  if (!message) return null
  return <div className="studio-toast" role="status">{message}</div>
}
