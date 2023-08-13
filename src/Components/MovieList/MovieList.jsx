import React, { useEffect, useState } from "react";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const [moviePopular, setMoviePopular] = useState([]);
  useEffect(() => {
    const getMovieList = async () => {
      const res = await tmdbApi.getMoviesList(props.type, {
        params: {},
      });
      setMoviePopular(res.results);
    };
    getMovieList();
  }, []);

  return (
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
      {moviePopular.map((item, index) => (
        <div className="movie_list">
          <SwiperSlide key={index} className="movie_list-slider">
            <Link to={`movie/${item.id}`}>
              <img src={apiConfig.originalImage(item.poster_path)} alt="" />
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
  );
};

export default MovieList;
