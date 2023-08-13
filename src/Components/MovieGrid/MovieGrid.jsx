import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { movieType, category, tvType } from "../../api/tmdbApi";
import Button from "../Button/Button";

import "../MovieList/MovieList.scss";
import "./MovieGrid.scss";

const MovieGrid = (props) => {
  const { keyword } = useParams();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState([]);
  const { category, id } = useParams();

  console.log(category);

  useEffect(() => {
    const getMovieList = async () => {
      let response = null;
      if (keyword === undefined) {
        switch (props.category) {
          case "movie":
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params: { page: page },
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {
              params: { page: page },
            });
        }
      } else {
        const params = { page: page + 1, query: keyword };
        response = await tmdbApi.search(props.category, { params });
      }
      // window.screenTop(0, 0);
      setData(response.results);
      setTotalPage(response.total_pages);
    };
    getMovieList();
  }, [category, keyword]);

  const handleLoadingMore = async () => {
    let response = null;
    if (keyword === undefined) {
      switch (props.category) {
        case "movie":
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params: { page: page },
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, {
            params: { page: page },
          });
      }
    } else {
      const params = { page: page + 1, query: keyword };
      response = await tmdbApi.search(props.category, { params });
    }
    // window.screenTop(0, 0);
    setData([...data, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="movie_grid">
        <Search category={props.category} keyword={keyword} />
        <div className="movie_grid-container">
          {data.map((item, index) => (
            <div className="movie_list">
              <div key={index} className="movie_list-slider">
                <Link to={`/${category}/${item.id}`}>
                  <img src={apiConfig.originalImage(item.poster_path)} alt="" />
                  <div className="vote_average">
                    <span>{item.vote_average}</span>
                    <i className="fas fa-star"></i>
                  </div>
                  <span>
                    {item.original_title
                      ? `${item.original_title}`
                      : `${item.original_name}`}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {page < totalPage ? (
          <button className="load_more" onClick={handleLoadingMore}>
            Load more
          </button>
        ) : null}
      </div>
    </>
  );
};

const Search = (props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
  const { category } = useParams();

  const gotoSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/search/${category}/${keyword}`);
    }
  }, [navigate, keyword, category]);

  return (
    <div className="search">
      <input
        type="text"
        value={keyword}
        placeholder="Enter keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="small search_btn" onClick={gotoSearch}>
        Search
      </button>
    </div>
  );
};
export default MovieGrid;
