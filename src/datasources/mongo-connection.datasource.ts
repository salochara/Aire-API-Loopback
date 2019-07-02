import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './calidad-aire.datasource.json';

export class MongoConnectionDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo_connection';

  constructor(
    @inject('datasources.config.mongo_connection', {optional: true})
      dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
