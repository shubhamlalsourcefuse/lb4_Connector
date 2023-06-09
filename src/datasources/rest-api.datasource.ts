import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'restApi',
  connector: 'rest',
  baseURL: 'http://localhost:3000/',
  crud: true,
  options: {
    headers: {
      "content-type": "application/json"
    }
  },
  operations: [
    {
      template: {
        method: "GET",
        url: "http://localhost:3000/users/{userId}"
      },
      functions: {
        getUserDetails: ['userId']
      }
    },
    {
      template: {
        method: "POST",
        url: "http://localhost:3000/users/{userId}",
        body: "{body}"
      },
      functions: {
        createUser: ['body']
      }
    },
    {
      template: {
        method: "GET",
        url: "http://localhost:3000/users/count",
      },
      functions: {
        getUsersCount: []
      }
    }
  ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestApiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'restApi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.restApi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
