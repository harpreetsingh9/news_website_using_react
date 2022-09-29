export const api_key = process.env.REACT_APP_API_KEY;
// const api_key = `/.netlify/functions/news`;
export let api = `https://newsapi.org/v2/`;

export const endpointApiTopNews = () =>
  `${api}top-headlines?country=in&apiKey=${api_key}`;
export const enpointApiSearch = (query) =>
  `${api}everything?q=${query}&from=2022-09-25&sortBy=publishedAt&apiKey=${api_key}`;
export const enpointApiCategory = (category) =>
  `${api}top-headlines?country=in&category=${category}&apiKey=${api_key}`;

export const categories = [
  {
    path: "/business",
    key: "business",
    category: "business",
    name: "Business",
  },
  {
    path: "/technology",
    key: "technology",
    category: "technology",
    name: "Technology",
  },
  { path: "/health", key: "health", category: "health", name: "Health" },
  { path: "/sports", key: "sports", category: "sports", name: "Sports" },
];
