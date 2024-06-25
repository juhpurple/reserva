import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import SessionController from './controlers/sessionController'
import HouseController from './controlers/HouseControllers'
import DashboardController from './controlers/DashboardController'
import ReserveController from './controlers/reserverController'

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/session', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:houses_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses',HouseController.destroy);

routes.get('/dashboard', DashboardController.show);

routes.post('/houses/:houses_id/reserve', ReserveController.store);
routes.get('/reserves', ReserveController.index);
routes.delete('/reserves/cancel',ReserveController.destroy);

export default routes