import express from 'express';
import color from 'colors';
import dotenv from 'dotenv';
import path, {resolve} from 'path';

// config env
dotenv.config();

// environment vars
const PORT = process.env.PORT || 9090;

// init app
const app = express();

// support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
app.get("/staff", (req, res) => {
  res.sendFile(path.join(resolve(), '/public/staff.html'));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(resolve(), '/public/menu.html'));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(resolve(), '/public/gallery.html'));
});

app.get("/location", (req, res) => {
  res.sendFile(path.join(resolve(), '/public/location.html'));
});

app.get("/archive", (req, res) => {
  res.sendFile(path.join(resolve(), '/public/archive.html'));
});

app.get("/news", (req, res) => {
  res.sendFile(path.join(resolve(), '/public/news.html'));
});

app.get("/reservation", (req, res) => {
  res.sendFile(path.join(resolve(), '/public/reservation.html'));
});

// static folder
app.use(express.static('public'));

// server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlue.white);
});