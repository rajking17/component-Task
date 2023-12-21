import React from 'react'

function Card({cardSet}) {
  return (
    <>
        {
            cardSet.isReverse ? 
            <div className="row g-0">
                <div className="col-lg-6 order-lg-1 text-white showcase-img" style={{backgroundImage: `url(${cardSet.cardImg})`}}></div>
                <div className="col-lg-6 order-lg-2 my-auto showcase-text">
                    <h2>{cardSet.title}</h2>
                    <p className="lead mb-0">{cardSet.description}</p>
                </div>
            </div>:
            <div className="row g-0">
                <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url(${cardSet.cardImg})`}}></div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>{cardSet.title}</h2>
                    <p className="lead mb-0">{cardSet.description}</p>
                </div>
            </div>
        }        
    </>
  )
}

export default Card