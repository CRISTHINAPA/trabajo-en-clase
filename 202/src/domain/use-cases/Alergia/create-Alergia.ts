import { CreateAlergiaDto } from '../../dtos';
import { AlergiaEntity } from '../../entities/Alergia.entity';
import { AlergiaRepository } from '../../repositories/Alergia.repository';


export interface CreateAlergiaUseCase {
  execute( dto: CreateAlergiaDto ): Promise<AlergiaEntity>
}

// ctrl+ shift + l
export class CreateAlergia implements CreateAlergiaUseCase {
  
  constructor(
    private readonly repository: AlergiaRepository,
  ) {}
  
  execute( dto: CreateAlergiaDto ): Promise<AlergiaEntity> {
    return this.repository.create(dto);
  }

}

