import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Aire extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  indice: number;

  @property({
    type: 'string',
    required: true,
  })
  ubicacion: string;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;


  constructor(data?: Partial<Aire>) {
    super(data);
  }
}

export interface AireRelations {
  // describe navigational properties here
}

export type AireWithRelations = Aire & AireRelations;
