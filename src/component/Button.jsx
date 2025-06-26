export default function Button({buttonName, className, ...props}) {
  return (
    <button {...props} className={className}>{buttonName}</button>
  )
}