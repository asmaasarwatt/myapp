import React from 'react'

export default function Contact() {
  return (
   <>
   <h1 className='pt-5 text-center mt-5 co fw-bold'>CONTACT SECTION</h1>
    <div className="st">
        <span className='kk'></span>
        <i className="fa-solid fa-star co"></i>
        <span className='kk'></span>
      </div>
   <div>
    <form action="" className='mx-auto w-50'>
    <div className="mb-5">
          <input placeholder='userName' type="text" className="form-control text-muted border-0 border-bottom rounded-0 shadow-none"/>
        </div>
    <div className="mb-5">
          <input placeholder='userAge' type="text" className="form-control text-muted border-0 border-bottom rounded-0 shadow-none"/>
        </div>
    <div className="mb-5">
          <input placeholder='userEmail' type="email" className="form-control text-muted border-0 border-bottom rounded-0 shadow-none"/>
        </div>
    <div className="mb-5">
          <input placeholder='userPassword' type="password" className="form-control text-muted border-0 border-bottom rounded-0 shadow-none "/>
        </div>
        <button className="btn coo mb-3 text-white">send Message </button>
    </form>
   </div>
   </>
  )
}
