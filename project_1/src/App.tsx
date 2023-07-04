// import React from "react"
import {useState} from 'react';
import './App.css'
import { List } from './List';
import { birthdayData ,BirthdayDataType} from './data';

function App() {
  const [people,setPeople] = useState<BirthdayDataType[]>(birthdayData);

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
