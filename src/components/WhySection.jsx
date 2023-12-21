import React from 'react'

function WhySection({whyList}) {
  return (
    <>
    <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className={whyList.icon}></i></div>
            <h3>{whyList.title}</h3>
            <p className="lead mb-0">{whyList.description}</p>
        </div>
    </div>
    </>
  )
}

export default WhySection