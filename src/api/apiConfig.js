const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiToken:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWY5ZGYwZWY3N2VhYmQ1ZGY2Mzg0NzBiZGI1YjJlZCIsInN1YiI6IjYzMzgxM2ZkMTc1MDUxMDA4ZTE2OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CVno6HbX17HtR-J3aVMLyVtS3J11E7uOalU25Xtz8kw",
  apiKey: "d9f9df0ef77eabd5df638470bdb5b2ed",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
