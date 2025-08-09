import { useEffect, useState } from "react"
import supabase from "../../supabaseClient"

export default function Practice() {
  // const [loading, setLoading] = useState(true)
  const [carData, setCarData] = useState([])

  useEffect(() => {
    async function fetchCarData() {
      const { data, error } = await supabase
      .from("car")
      .select("*")

      if (error){
        console.error("Error fetching data : ", error)
      } else {
        setCarData(data)
        console.log(data)
      }
    }
    fetchCarData()
  }, []); // Empty dependency array = run once

  function purchaseNotification(car) {
    window.alert(`You have purchased ${car.brand}-${car.model}`)
    return
  }

  return(
    <div>
      {carData.map((car,index)=>(
        <div key={index} className="flex flex-row gap-1 mb-3 items-center justify-between max-w-80">
          <h1>{car.brand}</h1>
          <h1>{car.model}</h1>
          <button onClick={() => purchaseNotification(car)} className="btn btn-success">Buy now</button>
        </div>
      ))}
    </div>
  )
}