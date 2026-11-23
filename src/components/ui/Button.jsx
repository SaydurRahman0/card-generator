export default function Button({ children, variant = 'secondary', className = '', ...props }) {
  return <button className={`studio-button ${variant} ${className}`} {...props}>{children}</button>
}
