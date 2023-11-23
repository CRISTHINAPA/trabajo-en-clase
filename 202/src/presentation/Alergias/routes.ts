import { Router } from 'express';
import { AlergiasController } from './controller';
import { AlergiaDatasourceImpl } from '../../infrastructure/datasource/Alergia.datasource.impl';
import { AlergiaRepositoryImpl } from '../../infrastructure/repositories/Alergia.repository.impl';


export class AlergiaRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new AlergiaDatasourceImpl();
    const AlergiaRepository = new AlergiaRepositoryImpl( datasource );
    const AlergiaController = new AlergiasController(AlergiaRepository);

    router.get('/', AlergiaController.getAlergias );
    router.get('/:id', AlergiaController.getAlergiaById );
    
    router.post('/', AlergiaController.createAlergia );
    router.put('/:id', AlergiaController.updateAlergia );
    router.delete('/:id', AlergiaController.deleteAlergia );


    return router;
  }


}