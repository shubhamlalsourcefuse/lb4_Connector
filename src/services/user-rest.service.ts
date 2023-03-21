import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestApiDataSource} from '../datasources';

export interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  roleId: number
}


export interface UserRest {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getUserDetails(id: number): Promise<any>,
  createUser(user: Omit<User, 'id'>): Promise<any>,
  getUsersCount(): Promise<any>,

}

export class UserRestProvider implements Provider<UserRest> {
  constructor(
    // rest_api must match the name property in the datasource json file
    @inject('datasources.restApi', {optional: true})
    protected dataSource: RestApiDataSource = new RestApiDataSource(),
  ) { }

  value(): Promise<UserRest> {
    return getService(this.dataSource);
  }
}
