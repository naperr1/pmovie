import React, { useCallback, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Skeleton from "react-loading-skeleton";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button, { ButtonOutLine } from "../Button/Button";

import "./HeroSlide.scss";
import { Link, useParams } from "react-router-dom";

const HeroSlide = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = {};

      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setData(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  // console.log(apiConfig.originalImage(data.backdrop_path));
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlideItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {data.map((item, index) => (
        <TrailerModal index={index} item={item} />
      ))} */}
    </div>
  );
};
const HeroSlideItem = (props) => {
  const item = props.item;
  const index = props.index;

  const [trailer, setTrailer] = useState([]);

  const handleWatchTrailer = async () => {
    const modal = document.querySelector(".modal");
    console.log(modal);
    const getVideoTrailer = async () => {
      const response = await tmdbApi.getVideoMovie(category.movie, item.id, {
        params: {},
      });
      setTrailer(response.results.slice(0, 1));
    };
    getVideoTrailer();
  };

  return (
    <div className="slide" key={index}>
      <div className="slide_img">
        <img src={apiConfig.originalImage(item.backdrop_path)} alt="banner" />
      </div>

      <div className="slide_content">
        <div className="slide_content-left">
          <h1>{item.original_title}</h1>
          <span>{item.overview.slice(0, 200)}...</span>
          <div className="button">
            <Button>
              <Link to={`movie/${item.id}`}>Watch now</Link>
            </Button>
            <ButtonOutLine>
              <p onClick={handleWatchTrailer}>Watch Trailer</p>
            </ButtonOutLine>
          </div>
        </div>
        <div className="slide_content-right">
          <img src={apiConfig.originalImage(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  return (
    <>
      <div className="modal">
        <iframe src="" frameborder="0"></iframe>
      </div>
    </>
  );
};

export default HeroSlide;
