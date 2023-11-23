import { prisma } from '../../data/postgres';
import { CreateAlergiaDto, AlergiaDatasource, AlergiaEntity, UpdateAlergiaDto } from '../../domain';




export class AlergiaDatasourceImpl implements AlergiaDatasource {

  async create( createAlergiaDto: CreateAlergiaDto ): Promise<AlergiaEntity> {
    const Alergia = await prisma.Alergia.create({
      data: createAlergiaDto!
    });

    return AlergiaEntity.fromObject( Alergia );
  }

  async getAll(): Promise<AlergiaEntity[]> {
    const Alergias = await prisma.Alergia.findMany();
    return Alergias.map( Alergia => AlergiaEntity.fromObject(Alergia) );
  }

  async findById( id: number ): Promise<AlergiaEntity> {
    const Alergia = await prisma.Alergia.findFirst({
      where: { id }
    });

    if ( !Alergia ) throw `Alergia with id ${ id } not found`;
    return AlergiaEntity.fromObject(Alergia);
  }

  async updateById( updateAlergiaDto: UpdateAlergiaDto ): Promise<AlergiaEntity> {
    await this.findById( updateAlergiaDto.id );
    
    const updateAlergia = await prisma.Alergia.update({
      where: { id: updateAlergiaDto.id },
      data: updateAlergiaDto!.values
    });

    return AlergiaEntity.fromObject(updateAlergia);
  }

  async deleteById( id: number ): Promise<AlergiaEntity> {
    await this.findById( id );
    const deleted = await prisma.Alergia.delete({
      where: { id }
    });

    return AlergiaEntity.fromObject( deleted );
  }

}