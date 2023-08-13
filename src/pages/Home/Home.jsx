import React from "react";
import Header from "../../Components/Header/Header";
import HeroSlide from "../../Components/HeroSlide/HeroSlide";
import MovieList from "../../Components/MovieList/MovieList";

import { movieType, tvType, category } from "../../api/tmdbApi";
import { Link } from "react-router-dom";
import { ButtonOutLine } from "../../Components/Button/Button";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section">
          <div className="section_header">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <ButtonOutLine className={"small"}>View More</ButtonOutLine>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section">
          <div className="section_header">
            <h2>Top Rate Movies</h2>
            <Link to="/movie">
              <ButtonOutLine className={"small"}>View More</ButtonOutLine>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section">
          <div className="section_header">
            <h2>Upcoming</h2>
            <Link to="/movie">
              <ButtonOutLine className={"small"}>View More</ButtonOutLine>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>
      </div>
    </div>
  );
};

export default Home;
