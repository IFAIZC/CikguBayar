export default function Checkbox({value,onChange}){
  return(
    <div className="flex justify-center">
      <input type="checkbox" className="checkbox checkbox-success" value={value} onChange={onChange} />
    </div>
  )
}