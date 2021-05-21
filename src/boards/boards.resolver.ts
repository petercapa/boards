import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { Boards } from './boards.entity';
import { BoardsService } from './boards.service';
// import { CreateUserInput } from './createUserInput';
// import { UpdateUserInput } from './updateUserInput';

@Resolver(() => Boards)
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  @Query(() => Boards, { name: 'board' })
  async getUserByPk(@Args('id', { type: () => Int }) id: number) {
    console.log("in board field resolver")
    return this.boardsService.findById(id);
  }

  @Query(() => [Boards], { name: 'boards' })
  async getboards() {
    console.log("in board field resolver")
    return this.boardsService.findBoards();
  }

//   @Mutation(() => Boards)
//   async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
//     return await this.boardsService.create(createUserInput);
//   }

//   @Mutation(() => Boards)
//   async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
//     return await this.boardsService.update(updateUserInput);
//   }

  @ResolveField()
  async comments(@Parent() board: Boards) {
    console.log("in board field resolver on commets")
    return await this.boardsService.getComments(board.id);
  }
}