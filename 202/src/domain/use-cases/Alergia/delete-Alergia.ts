import { AlergiaEntity } from '../../entities/Alergia.entity';
import { AlergiaRepository } from '../../repositories/Alergia.repository';


export interface DeleteAlergiaUseCase {
  execute( id: number ): Promise<AlergiaEntity>
}

export class DeleteAlergia implements DeleteAlergiaUseCase {
  
  constructor(
    private readonly repository: AlergiaRepository,
  ) {}
  
  execute( id: number ): Promise<AlergiaEntity> {
    return this.repository.deleteById(id);
  }

}

