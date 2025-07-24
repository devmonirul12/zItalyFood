import express from 'express';
import { loadHomePage, loadMenuPage, loadStaffPage, loadLocationPage, loadArchivePage, loadReservationPage, loadNewsPage, loadGalleryPage } from '../controllers/PageController.js';
import { loadLayoutPage } from '../controllers/PageController.js';

//init router
const router = express.Router();

//routing
router.get('/', loadHomePage);
router.get('/menu', loadMenuPage);
router.get('/staff', loadStaffPage);
router.get('/location', loadLocationPage);
router.get('/archive', loadArchivePage);
router.get('/reservation', loadReservationPage);
router.get('/news', loadNewsPage);
router.get('/gallery', loadGalleryPage);
router.get('/layout', loadLayoutPage);


// export router
export default router;