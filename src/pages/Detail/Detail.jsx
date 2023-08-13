import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./Detail.scss";
import Casts from "./Casts/Casts";
import Similar from "../../Components/Similar/Similar";
import Video from "./Video/Video";
import ImageNotFound from "../../Components/ImageNotFound/ImageNotFound";

const Loading = () => {
  return (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h1>
  );
};

const Detail = () => {
  const { category, id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMoviesDetail = async () => {
      try {
        const response = await tmdbApi.getMoviesDetails(category, id, {
          params: {},
        });
        setDetail(response);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesDetail();
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const background = apiConfig.originalImage(detail.backdrop_path);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="details">
          <div
            className="detail"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="detail_content">
              <div className="detail_content-poster">
                <img src={apiConfig.originalImage(detail.poster_path)} alt="" />
                <div className="vote_average">
                  <span>{detail.vote_average}</span>
                  <i class="fas fa-star"></i>
                </div>
              </div>

              <div className="detail_content-text">
                {loading ? (
                  <Loading />
                ) : (
                  <h1>
                    {detail.original_title
                      ? `${detail.original_title}`
                      : `${detail.original_name}`}
                  </h1>
                )}
                <div className="genres">
                  {detail.genres &&
                    detail.genres.map((item, index) => (
                      <span key={index} className="genres_item">
                        {item.name}
                      </span>
                    ))}
                </div>
                <span>{detail.overview}</span>
                <h3 style={{ marginTop: "20px" }}>Casts</h3>
                <Casts id={detail.id} />
              </div>
            </div>
          </div>
        </div>
      )}
      <Video />
      <Similar />
    </div>
  );
};
export default Detail;
