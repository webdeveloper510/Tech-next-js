"use client";
import Link from "next/link";
import heroImg from '../../public/images/hero/Hero-banner.png'
import React from "react";
import {
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { MDBCarousel } from 'mdb-react-ui-kit';
const Testimonial = () => {
  return (
    <>
      <section
        id="testimonial-section"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[0px] 2xl:pt-[210px]"
      
      >
        <MDBContainer className="py-5">
      <MDBCarousel showControls dark>
    
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-left">
                <MDBCol lg="4" className="mb-5 mb-md-0 single-col">
                 
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-left mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                  <div className="testimonial-inner-content">
                  <div className="d-flex justify-content-left mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="30px"
                      height="30px"
                    />
                     <h5 className="mb-3">Anna Deynah</h5><br></br>
                  <p className="text-primary mb-3">UX Designer</p>
                  </div>
                 
                  </div>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0 single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alex Rey</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0 single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block single-col">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
        
      </MDBCarousel>
    </MDBContainer>

      </section>
    </>
  );
};

export default Testimonial;
