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

const PopularQuiz = () => {
  return (
    <>
      <section
        id="cards"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[0px] 2xl:pt-[100px]"

      
      >
       <div className="container">
        <div className="quiz-bar d-flex justify-between">
        <h2 className="right-quiz">Our Popular Quiz</h2>
        <Link
                  href="/"
                  className="btn-view-all"
                >
                 View all
                </Link>
        </div>
  <div className="row d-flex justify-content-center Quiz-outer">
    <div className="col-md-2 active-quiz">
      <MDBCard>
        <MDBCardImage src='../images/quiz/icon-1.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Computer<br></br> Science</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col-md-2">
    <MDBCard>
        <MDBCardImage src='../images/quiz/icon-2.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Biology &<br></br> Lifestyle</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col-md-2">
    <MDBCard>
        <MDBCardImage src='../images/quiz/icon-3.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Business & <br></br>Management</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div className="col-md-2">
    <MDBCard>
        <MDBCardImage src='../images/quiz/icon-4.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Data Analysis<br></br> & Statistics</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      
    </div>
    <div className="col-md-2">
    <MDBCard>
        <MDBCardImage src='../images/quiz/icon-5.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Food & <br></br>Nutrition</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      
    </div>
    <div className="col-md-2">
    <MDBCard>
        <MDBCardImage src='../images/quiz/icon-6.png' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Environmental <br></br>Science</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default PopularQuiz;
