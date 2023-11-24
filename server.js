const PORT = 8000;
import cors from "cors";
import express, { response } from "express";
import fetch from "node-fetch";
const dotenv = import("dotenv/config");

const app = express();
app.use(cors());
app.get("/api", (req, res) => {
  res.json("Hi this is internal SERVER");
});

app.get("/api/weather", async (req, res) => {
  try {
    const apiKey = process.env.VITE_WEATHER_API_KEY;
    const location = req.query.q;
    if (!location) {
      return res.json("lol");
    }
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("error getting weather data ", error);
    res.status(500).json({
      error: "Internal Server Error ex",
    });
  }
});

app.listen(PORT, () => console.log("server is running at port", PORT));
