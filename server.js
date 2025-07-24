import express from 'express';
import color from 'colors';
import dotenv from 'dotenv';
import pageRouter from './routes/pageRoutes.js';
import expressEJSLayout from 'express-ejs-layouts';
import { headerData } from './data/headerData.js';
import { footerData } from './data/footerData.js';

// config env
dotenv.config();

// environment vars
const PORT = process.env.PORT || 9090;

// init app
const app = express();

// init support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressEJSLayout);

// set EJS support
app.set('view engine', 'ejs');


//global header & footer data
app.use((req, res, next)=>{
      res.locals.headerData = headerData;
      res.locals.footerData = footerData
    next()
})


// routing
app.use(pageRouter);

// static folder
app.use(express.static('public'));

// server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlue.white);
});