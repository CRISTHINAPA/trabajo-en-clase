export class UpdateAlergiaDto {

  private constructor(
      public readonly id: number,
      public readonly nombreAlergias: string,
      public readonly detalleTratamiento?: string,

  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};
    if ( this.nombreAlergias ) returnObj.genre = this.nombreAlergias;
    if ( this.detalleTratamiento ) returnObj.genre = this.detalleTratamiento;
    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateAlergiaDto?]  {

    const {id, nombreAlergias, detalleTratamiento } = props;
    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }
 
    if ( !nombreAlergias && !detalleTratamiento ) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateAlergiaDto(id, nombreAlergias, detalleTratamiento)];
    }
  
  
  }