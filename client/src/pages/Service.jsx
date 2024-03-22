import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {
  const { services } = useAuth();
  if (!Array.isArray(services) || services.length === 0) {
    return <p>No services available</p>;
  }


  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading"> Services </h1>
        </div>

        <div className="container grid grid-three-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>


          {
            services.map((item, index) => {
              return (
                <>
                  <div className="card">
                    <div className="card-img">
                      <img src="/images/design.png" alt="Our services info" />

                    </div>

                    <div className="card-details">
                      <div className='grid grid-two-cols'>
                        <p></p>
                        <p >{item.price}</p>


                      </div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </>
              )
            })
          }


        </div>
      </section>
    </>
  )
}

export default Service

