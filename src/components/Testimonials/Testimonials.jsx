import React from "react";
import "./testimonials.css";
import { testimonialsData } from "../../assets/data";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonialsData.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="article testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
