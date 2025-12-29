import React from 'react'
import { useState } from 'react';
import poert1 from '../../imgs/poert1.png'
import port2 from '../../imgs/port2.png'
import port3 from '../../imgs/port3.png'
export default function Portfolio() {
  let [isOpen,SetIsOpen] = useState(false);
  let [Img,SetImg] = useState(null);
  return (
    <>
    <h1 className='pt-5 text-center mt-5 co  fw-bold'>PORTFOLIO COMPONENT</h1>
 <div className="  st">
        <span className='k'></span>
        <i className="fa-solid fa-star co"></i>
        <span className='k'></span>
      </div>
      <div className="container text-center">
  <div className="row">
    <div className="col-md-4">
            <div onClick={()=>{SetImg("../../imgs/poert1.png"); SetIsOpen(true);}}   className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src={poert1} alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div onClick={()=>{SetImg("../../imgs/port2.png"); SetIsOpen(true);}}  className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src={port2} alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div  onClick={()=>{SetImg("../../imgs/port3.png"); SetIsOpen(true);}} className="position-relative overflow-hidden rounded-2">
              <img className="w-100" src={port3} alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    
  
  </div>
  <div className="row mt-5 mb-5">
    <div className="col-md-4">
            <div onClick={()=>{SetImg("../../imgs/poert1.png"); SetIsOpen(true);}}   className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src={poert1} alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div onClick={()=>{SetImg("../../imgs/port2.png"); SetIsOpen(true);}}  className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src={port2} alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div  onClick={()=>{SetImg("../../imgs/port3.png"); SetIsOpen(true);}} className="position-relative overflow-hidden rounded-2">
              <img className="w-100" src={port3} alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    
  
  </div>
 
  {isOpen && (<div onClick={()=> SetIsOpen(false)} className=' mt-5 position-fixed top-0 start-0 w-100 d-flex justify-content-center align-items-start h'>
    <div>
      <img src={Img} className='img-fluid w-50' alt="" />
    </div>
  </div>)}
 
</div>
    </>
  )
}