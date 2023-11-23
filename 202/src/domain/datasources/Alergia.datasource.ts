import { CreateAlergiaDto, UpdateAlergiaDto } from '../dtos';
import { AlergiaEntity } from '../entities/Alergia.entity';



export abstract class AlergiaDatasource {

  abstract create( CreateAlergiaDto: CreateAlergiaDto ): Promise<AlergiaEntity>;

  abstract getAll(): Promise<AlergiaEntity[]>;

  abstract findById( id: number ): Promise<AlergiaEntity>;
  abstract updateById( updateAlergiaDto: UpdateAlergiaDto ): Promise<AlergiaEntity>;
  abstract deleteById( id: number ): Promise<AlergiaEntity>;

}