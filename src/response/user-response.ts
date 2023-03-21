import {ResponseObject} from '@loopback/rest';


export const CREATE_USER_RESPONSE: ResponseObject = {
  description: 'Create user Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          name: {type: 'string'},
          phone: {type: 'string'},
          email: {type: 'string'},
          role: {type: 'number'},
          id: {type: 'number'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

export const CREATE_USER_REQUEST: ResponseObject = {
  description: 'Create Request',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'UserRequest',
        properties: {
          name: {type: 'string'},
          phone: {type: 'string'},
          email: {type: 'string'},
          roleId: {type: 'number'},
        },
      },
    },
  },
};

