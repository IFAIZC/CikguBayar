export default function Dropdown() {
  return (
    <select defaultValue="Pick a font" className="select select-ghost">
      {/* <option disabled={true}>Payment Status</option> */}
      <option>❌</option>
      <option>✅</option>
    </select>
  )
}