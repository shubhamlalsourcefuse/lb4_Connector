import {api, operation, param, requestBody} from '@loopback/rest';
import {PingResponse} from '../models/ping-response.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by PingController.
 *
 */
@api({
  components: {
    schemas: {
      User: {
        title: 'User',
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          roleId: {
            type: 'number',
          },
        },
        required: [
          'name',
          'email',
        ],
        additionalProperties: false,
      },
      Customer: {
        title: 'Customer',
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          website: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          userId: {
            type: 'number',
          },
        },
        required: [
          'name',
          'website',
        ],
        additionalProperties: false,
      },
      NewCustomer: {
        title: 'NewCustomer',
        type: 'object',
        description: "(tsType: Omit<Customer, 'id'>, schemaOptions: { title: 'NewCustomer', exclude: [ 'id' ] })",
        properties: {
          name: {
            type: 'string',
          },
          website: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          userId: {
            type: 'number',
          },
        },
        required: [
          'name',
          'website',
        ],
        additionalProperties: false,
        'x-typescript-type': "Omit<Customer, 'id'>",
      },
      RoleWithRelations: {
        title: 'RoleWithRelations',
        type: 'object',
        description: '(tsType: RoleWithRelations, schemaOptions: { includeRelations: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          key: {
            type: 'string',
            enum: [
              'SuperAdmin',
              'Admin',
              'Subscriber',
            ],
          },
          description: {
            type: 'string',
          },
          users: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/UserWithRelations',
            },
          },
        },
        required: [
          'name',
          'key',
        ],
        additionalProperties: false,
        'x-typescript-type': 'RoleWithRelations',
      },
      UserWithRelations: {
        title: 'UserWithRelations',
        type: 'object',
        description: '(tsType: UserWithRelations, schemaOptions: { includeRelations: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          roleId: {
            type: 'number',
          },
          role: {
            $ref: '#/components/schemas/RoleWithRelations',
          },
        },
        required: [
          'name',
          'email',
        ],
        additionalProperties: false,
        'x-typescript-type': 'UserWithRelations',
      },
      CustomerWithRelations: {
        title: 'CustomerWithRelations',
        type: 'object',
        description: '(tsType: CustomerWithRelations, schemaOptions: { includeRelations: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          website: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          userId: {
            type: 'number',
          },
          user: {
            $ref: '#/components/schemas/UserWithRelations',
          },
        },
        required: [
          'name',
          'website',
        ],
        additionalProperties: false,
        'x-typescript-type': 'CustomerWithRelations',
      },
      CustomerPartial: {
        title: 'CustomerPartial',
        type: 'object',
        description: '(tsType: Partial<Customer>, schemaOptions: { partial: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          website: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          userId: {
            type: 'number',
          },
        },
        additionalProperties: false,
        'x-typescript-type': 'Partial<Customer>',
      },
      NewUserInRole: {
        title: 'NewUserInRole',
        type: 'object',
        description: "(tsType: @loopback/repository-json-schema#Optional<Omit<User, 'id'>, 'roleId'>, schemaOptions: { title: 'NewUserInRole', exclude: [ 'id' ], optional: [ 'roleId' ] })",
        properties: {
          name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          roleId: {
            type: 'number',
          },
        },
        required: [
          'name',
          'email',
        ],
        additionalProperties: false,
        'x-typescript-type': "@loopback/repository-json-schema#Optional<Omit<User, 'id'>, 'roleId'>",
      },
      UserPartial: {
        title: 'UserPartial',
        type: 'object',
        description: '(tsType: Partial<User>, schemaOptions: { partial: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          roleId: {
            type: 'number',
          },
        },
        additionalProperties: false,
        'x-typescript-type': 'Partial<User>',
      },
      Role: {
        title: 'Role',
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          key: {
            type: 'string',
            enum: [
              'SuperAdmin',
              'Admin',
              'Subscriber',
            ],
          },
          description: {
            type: 'string',
          },
        },
        required: [
          'name',
          'key',
        ],
        additionalProperties: false,
      },
      NewRole: {
        title: 'NewRole',
        type: 'object',
        description: "(tsType: Omit<Role, 'id'>, schemaOptions: { title: 'NewRole', exclude: [ 'id' ] })",
        properties: {
          name: {
            type: 'string',
          },
          key: {
            type: 'string',
            enum: [
              'SuperAdmin',
              'Admin',
              'Subscriber',
            ],
          },
          description: {
            type: 'string',
          },
        },
        required: [
          'name',
          'key',
        ],
        additionalProperties: false,
        'x-typescript-type': "Omit<Role, 'id'>",
      },
      RolePartial: {
        title: 'RolePartial',
        type: 'object',
        description: '(tsType: Partial<Role>, schemaOptions: { partial: true })',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          key: {
            type: 'string',
            enum: [
              'SuperAdmin',
              'Admin',
              'Subscriber',
            ],
          },
          description: {
            type: 'string',
          },
        },
        additionalProperties: false,
        'x-typescript-type': 'Partial<Role>',
      },
      NewUser: {
        title: 'NewUser',
        type: 'object',
        description: "(tsType: Omit<User, 'id'>, schemaOptions: { title: 'NewUser', exclude: [ 'id' ] })",
        properties: {
          name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          roleId: {
            type: 'number',
          },
        },
        required: [
          'name',
          'email',
        ],
        additionalProperties: false,
        'x-typescript-type': "Omit<User, 'id'>",
      },
      'loopback.Count': {
        type: 'object',
        title: 'loopback.Count',
        'x-typescript-type': '@loopback/repository#Count',
        properties: {
          count: {
            type: 'number',
          },
        },
      },
      'Customer.ScopeFilter': {
        type: 'object',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          where: {
            type: 'object',
            additionalProperties: true,
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {},
                additionalProperties: true,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
                uniqueItems: true,
              },
            ],
          },
          include: {
            type: 'array',
            items: {
              type: 'object',
              properties: {},
              additionalProperties: true,
            },
          },
        },
        additionalProperties: false,
        title: 'Customer.ScopeFilter',
      },
      'Customer.IncludeFilter.Items': {
        title: 'Customer.IncludeFilter.Items',
        type: 'object',
        properties: {
          relation: {
            type: 'string',
            enum: [
              'user',
            ],
          },
          scope: {
            $ref: '#/components/schemas/Customer.ScopeFilter',
          },
        },
      },
      'Customer.Filter': {
        type: 'object',
        title: 'Customer.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'boolean',
                  },
                  website: {
                    type: 'boolean',
                  },
                  address: {
                    type: 'boolean',
                  },
                  userId: {
                    type: 'boolean',
                  },
                },
                additionalProperties: false,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'id',
                    'name',
                    'website',
                    'address',
                    'userId',
                  ],
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Customer.Fields',
          },
          include: {
            title: 'Customer.IncludeFilter',
            type: 'array',
            items: {
              anyOf: [
                {
                  $ref: '#/components/schemas/Customer.IncludeFilter.Items',
                },
                {
                  type: 'string',
                },
              ],
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Customer>',
      },
      'Customer.Filter1': {
        type: 'object',
        title: 'Customer.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          where: {
            title: 'Customer.WhereFilter',
            type: 'object',
            additionalProperties: true,
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'boolean',
                  },
                  website: {
                    type: 'boolean',
                  },
                  address: {
                    type: 'boolean',
                  },
                  userId: {
                    type: 'boolean',
                  },
                },
                additionalProperties: false,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'id',
                    'name',
                    'website',
                    'address',
                    'userId',
                  ],
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Customer.Fields',
          },
          include: {
            title: 'Customer.IncludeFilter',
            type: 'array',
            items: {
              anyOf: [
                {
                  $ref: '#/components/schemas/Customer.IncludeFilter.Items',
                },
                {
                  type: 'string',
                },
              ],
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Customer>',
      },
      PingResponse: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {
            type: 'string',
          },
          date: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {
                type: 'string',
              },
            },
            additionalProperties: true,
          },
        },
      },
      'Role.ScopeFilter': {
        type: 'object',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          where: {
            type: 'object',
            additionalProperties: true,
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {},
                additionalProperties: true,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
                uniqueItems: true,
              },
            ],
          },
          include: {
            type: 'array',
            items: {
              type: 'object',
              properties: {},
              additionalProperties: true,
            },
          },
        },
        additionalProperties: false,
        title: 'Role.ScopeFilter',
      },
      'Role.IncludeFilter.Items': {
        title: 'Role.IncludeFilter.Items',
        type: 'object',
        properties: {
          relation: {
            type: 'string',
            enum: [
              'users',
            ],
          },
          scope: {
            $ref: '#/components/schemas/Role.ScopeFilter',
          },
        },
      },
      'Role.Filter': {
        type: 'object',
        title: 'Role.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'boolean',
                  },
                  key: {
                    type: 'boolean',
                  },
                  description: {
                    type: 'boolean',
                  },
                },
                additionalProperties: false,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'id',
                    'name',
                    'key',
                    'description',
                  ],
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Role.Fields',
          },
          include: {
            title: 'Role.IncludeFilter',
            type: 'array',
            items: {
              anyOf: [
                {
                  $ref: '#/components/schemas/Role.IncludeFilter.Items',
                },
                {
                  type: 'string',
                },
              ],
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Role>',
      },
      'Role.Filter1': {
        type: 'object',
        title: 'Role.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          where: {
            title: 'Role.WhereFilter',
            type: 'object',
            additionalProperties: true,
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'boolean',
                  },
                  key: {
                    type: 'boolean',
                  },
                  description: {
                    type: 'boolean',
                  },
                },
                additionalProperties: false,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'id',
                    'name',
                    'key',
                    'description',
                  ],
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'Role.Fields',
          },
          include: {
            title: 'Role.IncludeFilter',
            type: 'array',
            items: {
              anyOf: [
                {
                  $ref: '#/components/schemas/Role.IncludeFilter.Items',
                },
                {
                  type: 'string',
                },
              ],
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<Role>',
      },
      'User.ScopeFilter': {
        type: 'object',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          where: {
            type: 'object',
            additionalProperties: true,
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {},
                additionalProperties: true,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
                uniqueItems: true,
              },
            ],
          },
          include: {
            type: 'array',
            items: {
              type: 'object',
              properties: {},
              additionalProperties: true,
            },
          },
        },
        additionalProperties: false,
        title: 'User.ScopeFilter',
      },
      'User.IncludeFilter.Items': {
        title: 'User.IncludeFilter.Items',
        type: 'object',
        properties: {
          relation: {
            type: 'string',
            enum: [
              'role',
            ],
          },
          scope: {
            $ref: '#/components/schemas/User.ScopeFilter',
          },
        },
      },
      'User.Filter': {
        type: 'object',
        title: 'User.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'boolean',
                  },
                  email: {
                    type: 'boolean',
                  },
                  phone: {
                    type: 'boolean',
                  },
                  roleId: {
                    type: 'boolean',
                  },
                },
                additionalProperties: false,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'id',
                    'name',
                    'email',
                    'phone',
                    'roleId',
                  ],
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'User.Fields',
          },
          include: {
            title: 'User.IncludeFilter',
            type: 'array',
            items: {
              anyOf: [
                {
                  $ref: '#/components/schemas/User.IncludeFilter.Items',
                },
                {
                  type: 'string',
                },
              ],
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<User>',
      },
      'User.Filter1': {
        type: 'object',
        title: 'User.Filter',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
          },
          limit: {
            type: 'integer',
            minimum: 1,
            example: 100,
          },
          skip: {
            type: 'integer',
            minimum: 0,
          },
          order: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          where: {
            title: 'User.WhereFilter',
            type: 'object',
            additionalProperties: true,
          },
          fields: {
            oneOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'boolean',
                  },
                  email: {
                    type: 'boolean',
                  },
                  phone: {
                    type: 'boolean',
                  },
                  roleId: {
                    type: 'boolean',
                  },
                },
                additionalProperties: false,
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'id',
                    'name',
                    'email',
                    'phone',
                    'roleId',
                  ],
                  example: 'id',
                },
                uniqueItems: true,
              },
            ],
            title: 'User.Fields',
          },
          include: {
            title: 'User.IncludeFilter',
            type: 'array',
            items: {
              anyOf: [
                {
                  $ref: '#/components/schemas/User.IncludeFilter.Items',
                },
                {
                  type: 'string',
                },
              ],
            },
          },
        },
        additionalProperties: false,
        'x-typescript-type': '@loopback/repository#Filter<User>',
      },
    },
  },
  paths: {},
})
export class PingController {
  constructor() {}

  /**
   *
   *
   * @returns Ping Response
   */
  @operation('get', '/ping', {
  'x-controller-name': 'PingController',
  'x-operation-name': 'ping',
  tags: [
    'PingController',
  ],
  responses: {
    '200': {
      description: 'Ping Response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/PingResponse',
          },
        },
      },
    },
  },
  operationId: 'PingController.ping',
})
  async ping(): Promise<PingResponse> {
    throw new Error('Not implemented');
  }

}

