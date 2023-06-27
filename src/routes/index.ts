import { Router } from "express";
import * as mainController from '../controllers/mainController';
import * as searchController from '../controllers/seachController';
const router = Router();

router.get('/', mainController.Home);
router.get('/dogs', mainController.Dogs);
router.get('/cats', mainController.Cats);
router.get('/fish', mainController.Fish);

router.get('search', searchController.Seach);


export default router;