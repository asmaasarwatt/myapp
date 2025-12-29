import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='footer p-5 text-white'>
      <div className="container">
        <div className='row text-center'>
          <div className="col-md-4 p-5">
          <h3 className=''>LOCATION</h3>
          <p className=''>2215 John Daniel Drive</p>
          <p className=''>Clark, MO 65243</p>
        </div>
        <div className='col-md-4 p-5'>
          <h3 className='mb-3'>AROUND THE WEB</h3>
          <div className="icons2 d-flex justify-content-center gap-3">
          
            <i className="border rounded-circle p-2 fa-brands fa-facebook"></i>
            <i className="border rounded-circle p-2 fa-brands fa-twitter"></i>
            <i className="border rounded-circle p-2 fa-brands fa-linkedin"></i>
            <i className="border rounded-circle p-2 fa-brands fa-google"></i>
          
        </div>
        </div>
         <div className='col-md-4 p-5'>
          <h3 className=''>ABOUT FREELANCER</h3>
           <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
            </div>
    </div>
    </div>
    <div className="footerr p-4 text-center text-white"> Copyright © Your Website 2021  </div>
    </>
  )
}
