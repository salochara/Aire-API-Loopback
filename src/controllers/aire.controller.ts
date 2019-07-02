import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Aire} from '../models';
import {AireRepository} from '../repositories';

export class AireController {
  constructor(
    @repository(AireRepository)
    public aireRepository : AireRepository,
  ) {}

  @post('/aires', {
    responses: {
      '200': {
        description: 'Aire model instance',
        content: {'application/json': {schema: {'x-ts-type': Aire}}},
      },
    },
  })
  async create(@requestBody() aire: Aire): Promise<Aire> {
    return await this.aireRepository.create(aire);
  }

  @get('/aires/count', {
    responses: {
      '200': {
        description: 'Aire model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Aire)) where?: Where<Aire>,
  ): Promise<Count> {
    return await this.aireRepository.count(where);
  }

  @get('/aires', {
    responses: {
      '200': {
        description: 'Array of Aire model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Aire}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Aire)) filter?: Filter<Aire>,
  ): Promise<Aire[]> {
    return await this.aireRepository.find(filter);
  }

  @patch('/aires', {
    responses: {
      '200': {
        description: 'Aire PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() aire: Aire,
    @param.query.object('where', getWhereSchemaFor(Aire)) where?: Where<Aire>,
  ): Promise<Count> {
    return await this.aireRepository.updateAll(aire, where);
  }

  @get('/aires/{id}', {
    responses: {
      '200': {
        description: 'Aire model instance',
        content: {'application/json': {schema: {'x-ts-type': Aire}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Aire> {
    return await this.aireRepository.findById(id);
  }

  @patch('/aires/{id}', {
    responses: {
      '204': {
        description: 'Aire PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() aire: Aire,
  ): Promise<void> {
    await this.aireRepository.updateById(id, aire);
  }

  @put('/aires/{id}', {
    responses: {
      '204': {
        description: 'Aire PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aire: Aire,
  ): Promise<void> {
    await this.aireRepository.replaceById(id, aire);
  }

  @del('/aires/{id}', {
    responses: {
      '204': {
        description: 'Aire DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aireRepository.deleteById(id);
  }
}
