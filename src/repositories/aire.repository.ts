import {DefaultCrudRepository} from '@loopback/repository';
import {Aire, AireRelations} from '../models';
import { CalidadAireDataSource } from '../datasources';
import {inject} from '@loopback/core';

export class AireRepository extends DefaultCrudRepository<
  Aire,
  typeof Aire.prototype.id,
  AireRelations
> {
  constructor(
    @inject('datasources.mongo_connection') dataSource:  CalidadAireDataSource ,
  ) {
    super(Aire, dataSource);
  }
}
