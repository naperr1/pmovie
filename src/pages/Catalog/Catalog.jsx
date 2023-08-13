import React from "react";
import { useParams } from "react-router-dom";

import tmdbApi, { category as cate } from "../../api/tmdbApi";

import MovieGrid from "../../Components/MovieGrid/MovieGrid";
import PageHeader from "../../Components/PageHeader/PageHeader";

const Catalog = () => {
  const { category } = useParams();
  return (
    <div>
      <PageHeader>
        {category === cate.movie ? "Movies" : "Tv Series"}
      </PageHeader>
      <MovieGrid category={category} />
    </div>
  );
};

export default Catalog;
