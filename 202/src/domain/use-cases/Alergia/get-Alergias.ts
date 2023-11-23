import { AlergiaEntity } from '../../entities/Alergia.entity';
import { AlergiaRepository } from '../../repositories/Alergia.repository';


export interface GetAlergiasUseCase {
  execute( id: number ): Promise<AlergiaEntity>
}


export class getAlergias implements GetAlergiasUseCase {
  
  constructor(
    private readonly repository: AlergiaRepository,
  ) {}
  
  execute( id: number ): Promise<AlergiaEntity> {
    return this.repository.findById(id);
  }

}

