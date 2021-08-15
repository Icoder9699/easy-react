import React, { useState } from 'react'
import background from "../assets/images/bg.png"

const accardions = [
    {
      name:"Slide one",
      id:1
    },
    {
      name:"Slide two",
      id:2
    },
    {
      name:"Slide three",
      id:3
    },
    {
      name:"Slide four",
      id:4
    },
  ]
export default function Accardion() {
  const [activeItem, setActiveItem] = useState(null)


    return (
    <div>
        <button onClick={() => setActiveItem(null)} className="btn btn-accardion">
            Clear
        </button>
        <div className="accardion">
            {
            accardions.map((accardion, index) => {
                return (
                <div className={`accardion__item ${accardion.id === activeItem && "active"}`} onClick={() => setActiveItem(accardion.id)}>
                    <div className="accardion__item-title">
                        {accardion.name}
                    </div>
                    {accardion.id === activeItem ? (
                    <div className="accardion__item-content">
                        <img src={background} alt="bg" />
                    </div>
                    ): null}
                    <span>{accardion.id}</span>
                </div>
                )
            })
            }
        </div>
    </div>
    )
}
