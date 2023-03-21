// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {inject} from '@loopback/context';
import {CountSchema} from '@loopback/repository';
import {get, param, post, requestBody, response} from '@loopback/rest';
import {CREATE_USER_REQUEST, CREATE_USER_RESPONSE} from '../response/user-response';
import {User, UserRest} from '../services';

export class UserRestController {
  constructor(
    @inject('datasources.restApi', {optional: true})
    protected userRestService: UserRest
  ) { }
  @post('/users')
  @response(200, CREATE_USER_RESPONSE)
  async createUser(@requestBody(CREATE_USER_REQUEST) user: Omit<User, 'id'>): Promise<User> {
    return this.userRestService.createUser(user);
  }

  @get('/users/count')
  @response(200, {
    description: 'User model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async getUsersCount() {
    return await this.userRestService.getUsersCount();
  }

  @get('/users/{id}')
  async getUserDetails(@param.path.number('id') userId: number): Promise<any> {
    return await this.userRestService.getUserDetails(userId);
  };


}
