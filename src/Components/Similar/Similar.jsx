import React, { useEffect, useState } from "react";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useParams, Link } from "react-router-dom";
import ImageNotFound from "../ImageNotFound/ImageNotFound";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";

import notFound from "../../image/222468-P1PZG2-870.jpg";

import "../MovieList/MovieList.scss";
import "../../pages/Home/Home.scss";
import "./Similar.scss";

const Similar = () => {
  const { category, id } = useParams();
  const [similars, setSimilar] = useState([]);

  useEffect(() => {
    const getSimilars = async () => {
      try {
        const res = await tmdbApi.getSimilar(category, id, { params: {} });
        setSimilar(res.results);
      } catch (error) {
        console.log(error);
      }
    };
    getSimilars();
    window.scrollTo(0, 0);
  }, [id]);

  console.log(similars);

  return (
    <div className="similar">
      <h3>Similar</h3>
      <Swiper
        breakpoints={{
          375: {
            // width: 375,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {/* apiConfig.originalImage(item.poster_path) */}
        {similars.map((item, index) => (
          <div className="movie_list">
            <SwiperSlide className="movie_list-slider" key={index}>
              <Link to={`/${category}/${item.id}`}>
                <img
                  src={`${
                    item.poster_path
                      ? apiConfig.originalImage(item.poster_path)
                      : notFound
                  }`}
                  alt=""
                />
                <div className="vote_average">
                  <span>{item.vote_average}</span>
                  <i className="fas fa-star"></i>
                </div>
                <span>{item.original_title}</span>
              </Link>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Similar;
