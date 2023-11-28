const PORT = 8000;
import cors from "cors";
import express, { response } from "express";
import fetch from "node-fetch";
const dotenv = await import("dotenv/config");
const app = express();

const allowedOrigins = process.env.VITE_CORS_ALLOWED_ORIGINS;

var corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
  methods: "GET",
};

// app.use(cors({ origin: allowedOrigins }));

app.get("/api", (req, res) => {
  res.json({ welcome: "Hi this is internal SERVER" });
});

app.get("/api/weather", cors(corsOptions), async (req, res) => {
  try {
    const apiKey = process.env.VITE_WEATHER_API_KEY;
    const location = req.query.q;
    if (!location) {
      return res.status(403).json("Error No Location provided");
    }
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return res.status(response.status).json({
        error: response.statusText,
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error getting weather data:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.get("/api/news", cors(corsOptions), async (req, res) => {
  try {
    const apikey = process.env.VITE_NEWS_API_KEY;
    const URL = `https://newsapi.org/v2/top-headlines?country=in&pageSize=3&apikey=${apikey}`;
    const responce = await fetch(URL);
    if (!responce.ok) {
      return res.status(response.status).json({
        error: response.statusText,
      });
    }
    const data = await responce.json();

    res.json(data);
  } catch (error) {
    console.error("Error getting news data:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.get("/api/movie", cors(corsOptions), async (req, res) => {
  const apiKey = process.env.VITE_TMDB_API_KEY;
  const genres = req.query.g;
  if (!genres) {
    return res.status(403).json({ error: "No genres Provided" });
  }

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genres}`;
  const responce = await fetch(URL);
  if (!responce.ok) {
    return res.status(response.status).json({
      error: response.statusText,
    });
  }
  const data = await responce.json();
  return res.json(data);
});

app.listen(PORT, () => console.log("server is running at port", PORT));
