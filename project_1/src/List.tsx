import { BirthdayDataType } from "./data";
import React from "react"

type Props = {
    people: BirthdayDataType[]
}

const List: React.FC<Props> = ({ people }) => {
    return (
        <>
            {people.map((item) => {
                let { image, id, age ,name} = item;
                return (
                    <article key={id} className='person'>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )

}

export { List }