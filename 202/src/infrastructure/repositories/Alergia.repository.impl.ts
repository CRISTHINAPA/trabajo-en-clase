import { CreateAlergiaDto, AlergiaDatasource, AlergiaEntity, AlergiaRepository, UpdateAlergiaDto } from '../../domain';


export class AlergiaRepositoryImpl implements AlergiaRepository {

  constructor(
    private readonly datasource: AlergiaDatasource,
  ) { }


  create( CreateAlergiaDto: CreateAlergiaDto ): Promise<AlergiaEntity> {
    return this.datasource.create( CreateAlergiaDto );
  }

  getAll(): Promise<AlergiaEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<AlergiaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateAlergiaDto: UpdateAlergiaDto ): Promise<AlergiaEntity> {
    return this.datasource.updateById( updateAlergiaDto );
  }

  deleteById( id: number ): Promise<AlergiaEntity> {
    return this.datasource.deleteById( id );
  }

}