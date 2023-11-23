import { Request, Response } from 'express';
import { CreateAlergiaDto, UpdateAlergiaDto } from '../../domain/dtos';
import { CreateAlergia, DeleteAlergia, GetAlergia, GetAlergias, AlergiaRepository, UpdateAlergia } from '../../domain';


export class AlergiaController {

  //* DI
  constructor(
    private readonly AlergiaRepository: AlergiaRepository,
  ) { }


  public getAlergias = ( req: Request, res: Response ) => {

    new GetAlergias( this.AlergiaRepository )
      .execute()
      .then( Alergia => res.json( Alergia ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getAlergiaById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetAlergia( this.AlergiaRepository )
      .execute( id )
      .then( Alergia => res.json( Alergia ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createAlergia = ( req: Request, res: Response ) => {
    const [ error, createAlergiaDto ] = CreateAlergiaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateAlergia( this.AlergiaRepository )
      .execute( createAlergiaDto! )
      .then( Alergia => res.json( Alergia ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateAlergia = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateAlergiaDto ] = UpdateAlergiaDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateAlergia( this.AlergiaRepository )
      .execute( updateAlergiaDto! )
      .then( cAlergia => res.json( cAlergia ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteAlergia = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteAlergia( this.AlergiaRepository )
      .execute( id )
      .then( Alergia => res.json( Alergia ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



}