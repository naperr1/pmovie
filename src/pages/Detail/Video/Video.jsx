import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../../api/tmdbApi";
import "./Video.scss";

const Video = () => {
  const { category, id } = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getVideoMovies = async () => {
      const res = await tmdbApi.getVideoMovie(category, id, { params: {} });
      setVideo(res.results.slice(0, 3));
    };
    getVideoMovies();
  }, [id]);

  return (
    <div className="video_list" style={{ marginTop: "0" }}>
      {video.map((item, index) => (
        <VideoList key={index} item={item} />
      ))}
    </div>
  );
};

const VideoList = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default Video;
