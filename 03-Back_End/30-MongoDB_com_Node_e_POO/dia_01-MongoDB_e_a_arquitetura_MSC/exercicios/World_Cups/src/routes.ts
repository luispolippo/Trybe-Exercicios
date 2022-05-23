import { Router } from 'express';
import CupController from './controllers/CupController';

const cupController = new CupController();
const routes = Router();

routes.get('/', cupController.getCups);
routes.get('/:year', cupController.getCupByYear);
routes.post('/', cupController.createCup);
routes.put('/:id', cupController.updateCup);
routes.delete('/:champion', cupController.deleteCup);

export default routes;