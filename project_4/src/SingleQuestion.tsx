import React, { useState } from "react"
import { QuestionType } from "./data";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"


const SingleQuestion: React.FC<QuestionType> = (item) => {
    let [showInfo, setShowInfo] = useState(false);
    let { title, info } = item;
    return (
        <>
            <article className='question'>
                <header>
                    <h4>{title}</h4>
                    <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </header>
                {showInfo && <p>{info}</p>}
            </article>
        </>
    )
}

export { SingleQuestion }