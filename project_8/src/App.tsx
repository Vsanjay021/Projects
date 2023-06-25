import { useState } from 'react'
import './App.css'
import { text as data} from './data';
function App() {
let [count,setCount]=useState<number>(0);
let [text,setText]=useState<string[]>([]);

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) : void=> {
e.preventDefault();
  let amount : number= count;
  if (count <= 0) {
    amount = 1;
  }
  if (count > 8) {
    amount = 8;
  }
  setText(data.slice(0, amount));
};
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const value = e.target.value;
  setCount(Number(value));
};
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={handleInputChange}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  )
}

export default App
