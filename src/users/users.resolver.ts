import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { Users } from '../entities/users.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './createUserInput';
import { UpdateUserInput } from './updateUserInput';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => Users, { name: 'user' })
  async getUserByPk(@Args('id', { type: () => Int }) id: number) {
    console.log("in user field resolver")
    return this.usersService.findById(id);
  }

  @Query(() => [Users], { name: 'users' })
  async getUsers() {
    console.log("in user field resolver")
    return this.usersService.findUsers();
  }

  @Mutation(() => Users)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => Users)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.usersService.update(updateUserInput);
  }

  @ResolveField()
  async comments(@Parent() user: Users) {
    console.log("in user field resolver on commets")
    return await this.usersService.getComments(user.id);
  }
}