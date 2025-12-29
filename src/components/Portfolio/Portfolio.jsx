import React from 'react'
import { useState } from 'react';
import poert1 from 'src/imgs/poert1'
import port2 from 'src/imgs/port2'
import port3 from 'src/imgs/port3'
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
            <div onClick={()=>{SetImg("/src/imgs/poert1.png"); SetIsOpen(true);}}   className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src="/src/imgs/poert1.png" alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div onClick={()=>{SetImg("/src/imgs/port2.png"); SetIsOpen(true);}}  className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src="/src/imgs/port2.png" alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div  onClick={()=>{SetImg("/src/imgs/port3.png"); SetIsOpen(true);}} className="position-relative overflow-hidden rounded-2">
              <img className="w-100" src="/src/imgs/port3.png" alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    
  
  </div>
  <div className="row mt-5 mb-5">
    <div className="col-md-4">
            <div onClick={()=>{SetImg("/src/imgs/poert1.png"); SetIsOpen(true);}}   className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src="/src/imgs/poert1.png" alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div onClick={()=>{SetImg("/src/imgs/port2.png"); SetIsOpen(true);}}  className="position-relative overflow-hidden rounded-2">
              <img  className="w-100" src="/src/imgs/port2.png" alt="" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
    <div className="col-md-4">
            <div  onClick={()=>{SetImg("/src/imgs/port3.png"); SetIsOpen(true);}} className="position-relative overflow-hidden rounded-2">
              <img className="w-100" src="/src/imgs/port3.png" alt="" />
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