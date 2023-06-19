
import './App.css'
import { List } from './List';
import { birthdayData } from './data';
import { BirthdayDataType } from './data';
import React from "react"

function App() {
  const [people,setPeople]=React.useState<BirthdayDataType[]>(birthdayData)
  return (
   <main>
    <section className='container' >
        <h3>{people.length} birthday</h3>
        <List people={people} />
        <button onClick={()=>{setPeople([])}}>Clear all</button>
    </section>
   </main>
  )
}

export default App
