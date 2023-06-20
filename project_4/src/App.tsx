import {useState} from "react";
import { questions as data} from "./data";
import './App.css'
import { SingleQuestion } from "./SingleQuestion";

function App() {
  
  const [questions,setQuestions]=useState(data);

  


  return (
    <>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question)=>{
            return (
              <SingleQuestion  key={question.id}  {...question} />
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App
