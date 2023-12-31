import {useState,useEffect} from "react"
import axios from 'axios'
import './App.css'
import { Loading } from "./Loading"
import { Tours } from "./Tours"

export type TourType = {
  id: string,
  name: string,
  info: string,
  image: string,
  price: string
}
function App() {


 const URL = "https://course-api.com/react-tours-project"
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([] as TourType[]);

  const fetchTours = async () => {
      let response=await axios.get(URL);
      let Data=await response.data;
      setTours(Data)
      setLoading(false);
  }

  const removeTour=(id:string)=>{
    const newTour=tours.filter((tour)=>tour.id!==id);
    setTours(newTour);
  }

  useEffect(()=>{
    fetchTours()
    
  },[])

  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length==0){
    return (
      <main>
      <div className='title'>
        <h2>no tours left</h2>
        {/* <button className='btn' onClick={() => fetchTours()}>
          refresh
        </button> */}
      </div>
    </main>
    )
  }

  return (
  <main>
    <Tours  tours={tours} removeTour={removeTour}/>
  </main>
  )
}

export default App
