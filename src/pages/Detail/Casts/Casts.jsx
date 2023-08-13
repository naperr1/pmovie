import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../../api/tmdbApi";
import apiConfig from "../../../api/apiConfig";

import imageNotFound from "../../../image/222468-P1PZG2-870.jpg";

import "./Casts.scss";

const Casts = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.getCredits(category, props.id, { params: {} });
      setCasts(res.cast.slice(0, 5));
      //   console.log(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts.map((item, index) => (
        <div className="casts_wapper" key={index}>
          <img
            src={`${
              item.profile_path
                ? apiConfig.originalImage(item.profile_path)
                : imageNotFound
            }`}
            alt=""
          />
          <h5>{item.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Casts;
