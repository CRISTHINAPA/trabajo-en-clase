import { AlergiaEntity } from '../../entities/Alergia.entity';
import { AlergiaRepository } from '../../repositories/Alergia.repository';


export interface GetAlergiaUseCase {
  execute(): Promise<AlergiaEntity[]>
}


export class GetAlergia implements GetAlergiaUseCase {
  
  constructor(
    private readonly repository: AlergiaRepository,
  ) {}
  
  execute(): Promise<AlergiaEntity[]> {
    return this.repository.getAll();
  }

}

