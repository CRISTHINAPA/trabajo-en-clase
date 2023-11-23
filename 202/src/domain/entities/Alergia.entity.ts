
export class AlergiaEntity {

    constructor(
      public id: number,
      public nombreAlergia: String,  
      public detalleTratamiento: string,
    
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): AlergiaEntity {
      const { id, nombreAlergia, detalleTratamiento } = object;
      if ( !id ) throw 'Id is required';
      if ( !nombreAlergia ) throw 'description is required';
      if ( !detalleTratamiento ) throw 'price is required';
  
        return new AlergiaEntity(id, nombreAlergia, detalleTratamiento)
    }
  
  }
  
  

