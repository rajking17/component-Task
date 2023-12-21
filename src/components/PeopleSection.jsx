import React from 'react'

function peopleSection({peoples}) {
  return (
    <>
    <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={peoples.profileImg} alt="..." />
            <h5>{peoples.name}</h5>
            <p className="font-weight-light mb-0">"{peoples.description}"</p>
        </div>
    </div>
    </>
  )
}

export default peopleSection