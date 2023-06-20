import { reviews } from "./data"
import {useState} from "react"
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from "react-icons/fa"
const Review=()=>{

    const [index,setIndex]=useState<number>(0)
    const {image,name,job,text} =reviews[index];


    const checkNumber=(num:number)=>{
        if(num>reviews.length-1){
            return 0
        }else if(num<0){
            return reviews.length-1
        }
        return num;
    }


    const prevPerson:React.MouseEventHandler<HTMLButtonElement>=()=>{
        setIndex((index)=>{
            let Index=index-1;
            return checkNumber(Index)
        })
    }

    const nextPerson:React.MouseEventHandler<HTMLButtonElement>=()=>{
        setIndex((index)=>{
            let Index=index+1;
            return checkNumber(Index)
        })
    }

    const randomPerson:React.MouseEventHandler<HTMLButtonElement>=()=>{
        let randomNumber=(Math.floor(Math.random()*reviews.length));
        if(randomNumber==index){
            randomNumber+1;
        }

        setIndex(checkNumber(randomNumber))
    }

    return (
        <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    )
}


export {Review}