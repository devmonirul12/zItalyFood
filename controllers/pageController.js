import { staffData } from '../data/staffData.js';
import { homeData } from '../data/homeData.js';
import { menuData, breadcrumbsNav } from '../data/menuData.js';
import { locationData } from '../data/locationData.js';
import { galleryData } from '../data/galleryData.js';










export const loadHomePage = (req, res) => {
  res.render('home', {
    homeData
  });
}

export const loadStaffPage = (req, res) => {
  res.render('staff', {
    staffData
  });
}

export const loadMenuPage = (req, res) => {
  res.render('menu', {
    menuData,
    breadcrumbsNav
  });
}

export const loadLocationPage = (req, res) => {
  res.render('location',{
    locationData
  });
}

export const loadArchivePage = (req, res) => {
  res.render('archive');
}

export const loadReservationPage = (req, res) => {
  res.render('reservation');
}

export const loadNewsPage = (req, res) => {
  res.render('news');
}

export const loadGalleryPage = (req, res) => {
  res.render('gallery',{
    galleryData
  });
}

export const loadLayoutPage = (req, res) => {
  res.render('layout');
}
