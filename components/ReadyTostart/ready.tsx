"use client";
import Link from "next/link";
import heroImg from '../../public/images/hero/Hero-banner.png'
import Image from 'next/image'
import men from '../../public/images/hero/men.png'
import cardone from '../../public/images/cards/card-1.png'
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const ReadyStudying = () => {
  return (
    <>
      <section
        id="cards"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[0px] 2xl:pt-[100px]"

      
      >
       <div className="container">
      
  <div className="row d-flex justify-content-center study-outer">
    <div className="col-md-3 study_content">
   
      <MDBCard>
       
        <MDBCardBody>
          <MDBCardTitle>Ready to Start <br></br>studying ?</MDBCardTitle>
         
          

        <MDBCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBCardText>
         
      
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col-md-3">
    <div className="bg-image">
  <img src="../images/study/globe.png" className="w-100" />
  <div className="mask text-light d-flex justify-content-center flex-column text-center" >
    <h4>General <br></br>
        Knowledge</h4>
  </div>
</div>
    </div>
    <div className="col-md-3">
    <div className="bg-image">
    <img src="../images/study/info.png" className="w-100" />
  <div className="mask text-light d-flex justify-content-center flex-column text-center" >
    <h4>Information<br></br>
Technology</h4>
 
  </div>
</div>
    </div>
    <div className="col-md-3">
    <div className="bg-image">
    <img src="../images/study/socail.png" className="w-100" />
  <div className="mask text-light d-flex justify-content-center flex-column text-center" >
    <h4>Social<br></br>
Affairs</h4>
  
  </div>
</div>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default ReadyStudying;
