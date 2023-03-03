// https://api.themoviedb.org/3/discover/movie?api_key=ace1900d36691df66e8862da68abe605&language=it-IT&sort_by=popularity.desc&with_genres=27

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ace1900d36691df66e8862da68abe605";

const GET = async (type = "", resource = "", page = "", queryCult = "") => {
  const res = await fetch(
    `${BASE_URL}${type}/${resource}?api_key=${API_KEY}&language=it-IT&sort_by=popularity.desc&with_genres=27&page=${page}${queryCult}`
  );
  const data = await res.json();
  return data;
};

const GET2 = async (type = "", resource = "") => {
  const res = await fetch(
    `${BASE_URL}${type}/${resource}?api_key=${API_KEY}&language=it-IT`
  );
  const data = await res.json();
  return data;
};

export { GET, GET2 };
