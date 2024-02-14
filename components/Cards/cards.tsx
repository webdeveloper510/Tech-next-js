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

const Cards = () => {
  return (
    <>
      <section
        id="cards"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[0px] 2xl:pt-[100px]"

      
      >
       <div className="container">
        <div className="quiz-bar d-flex justify-between">
        <h2 className="right-quiz">Find The Right Quiz for You</h2>
        <Link
                  href="/"
                  className="btn-view-all"
                >
                 View all
                </Link>
        </div>
  <div className="row d-flex justify-content-center">
    <div className="col-md-3">
      <MDBCard>
        <MDBCardImage src='../images/cards/card-1.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Mathematician Quiz</MDBCardTitle>
         
            <div className="custom-card">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/user.png' position='top' alt='...' />
          <div className="user-title">Christopher Nolan</div></div>
          <div className="user-price">$100</div>
          </div>

          <div className="custom-card eye-pause-div">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/eye-icon.png' position='top' alt='...' />
          <div className="user-views">29.500</div></div>
          <div className="card-inner-content">
          <MDBCardImage src='../images/cards/pause.png' position='top' alt='...' />
          <div className="user-lectures">36 Lectures</div>
          </div>
          </div>
         
      
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col-md-3">
      <MDBCard>
      <MDBCardImage src='../images/cards/card-2.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Science & Progress Quiz</MDBCardTitle>
          <div className="custom-card">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/user.png' position='top' alt='...' />
          <div className="user-title">Christopher Nolan</div></div>
          <div className="user-price">$100</div></div>
          <div className="custom-card eye-pause-div">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/eye-icon.png' position='top' alt='...' />
          <div className="user-views">29.500</div></div>
          <div className="card-inner-content">
          <MDBCardImage src='../images/cards/pause.png' position='top' alt='...' />
          <div className="user-lectures">36 Lectures</div>
          </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col-md-3">
      <MDBCard>
      <MDBCardImage src='../images/cards/card-3.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Computer Science Quiz</MDBCardTitle>
          <div className="custom-card">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/user.png' position='top' alt='...' />
          <div className="user-title">Christopher Nolan</div></div>
          <div className="user-price">$100</div></div>
          <div className="custom-card eye-pause-div">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/eye-icon.png' position='top' alt='...' />
          <div className="user-views">29.500</div></div>
          <div className="card-inner-content">
          <MDBCardImage src='../images/cards/pause.png' position='top' alt='...' />
          <div className="user-lectures">36 Lectures</div>
          </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col-md-3">
      <MDBCard>
      <MDBCardImage src='../images/cards/card-4.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>History Quiz</MDBCardTitle>
          <div className="custom-card">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/user.png' position='top' alt='...' />
          <div className="user-title">Christopher Nolan</div></div>
          <div className="user-price">$100</div></div>
          <div className="custom-card eye-pause-div">
            <div className="card-inner-content">
            <MDBCardImage src='../images/cards/eye-icon.png' position='top' alt='...' />
          <div className="user-views">29.500</div></div>
          <div className="card-inner-content">
          <MDBCardImage src='../images/cards/pause.png' position='top' alt='...' />
          <div className="user-lectures">36 Lectures</div>
          </div>
          </div>
          {/* <MDBBtn href='#'>Button</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default Cards;
