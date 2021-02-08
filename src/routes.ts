import { Router } from 'express';

import UsersController from './controllers/UsersController';
import RolesController from './controllers/RolesController';
import UserRolesController from './controllers/UserRolesController';

const routes = Router();

routes.post('/users', UsersController.create); 
routes.put('/users', UsersController.modify); 
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.delete('/users/:id', UsersController.delete);

routes.post('/roles', RolesController.create); 
routes.put('/roles', RolesController.modify); 
routes.get('/roles', RolesController.index);
routes.get('/roles/:id', RolesController.show);
routes.delete('/roles/:id', RolesController.delete);

routes.post('/userroles', UserRolesController.create); 
routes.put('/userroles', UserRolesController.modify); 
routes.get('/userroles', UserRolesController.index);
routes.get('/userroles/:id', UserRolesController.show);
routes.delete('/userroles/:id', UserRolesController.delete);

export default routes;