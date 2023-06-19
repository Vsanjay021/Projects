import { TourType } from "./App";
import { Tour } from "./Tour";
import React from "react";
type Props={
    tours:TourType[],
    removeTour:(id:string)=>void;
}


const Tours:React.FC<Props>=({tours,removeTour})=>{
    return (
        <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    )
}
export {Tours}
