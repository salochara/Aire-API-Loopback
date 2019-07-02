import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './calidad-aire.datasource.json';

export class CalidadAireDataSource extends juggler.DataSource {
  static dataSourceName = 'Calidad_Aire';

  constructor(
    @inject('datasources.config.Calidad_Aire', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
