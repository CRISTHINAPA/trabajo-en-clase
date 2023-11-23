import { Router } from 'express';
import { AlergiaRoutes } from './Alergia/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    //localhost:3000/api/Doctor
    router.use('/api/Alergia', AlergiaRoutes.routes );
    return router;
  }


}