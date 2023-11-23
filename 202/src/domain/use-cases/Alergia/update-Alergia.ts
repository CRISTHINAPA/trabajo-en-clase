import { UpdateAlergiaDto } from '../../dtos';
import { AlergiaEntity } from '../../entities/Alergia.entity';
import { AlergiaRepository } from '../../repositories/Alergia.repository';


export interface UpdateAlergiaUseCase {
  execute( dto: UpdateAlergiaDto ): Promise<AlergiaEntity>
}


export class UpdateAlergia implements UpdateAlergiaUseCase {
  
  constructor(
    private readonly repository: AlergiaRepository,
  ) {}
  
  execute( dto: UpdateAlergiaDto ): Promise<AlergiaEntity> {
    return this.repository.updateById(dto);
  }

}

