import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import User from '../db/models/user.entity';
import CreateUserDto, { DeleteUserDto } from './dto/user.input';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Post } from '@nestjs/common';


@ApiTags('users')
@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly repoService: RepoService) { }

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }

  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<User> {
    return this.repoService.userRepo.findOne(id);
  }

  /*
  @Mutation(() => User)// é para quando voce quer editar um registro deletar e afins
  public async deleteUser(@Args('id') id: number): Promise<User> {
    this.repoService.userRepo.delete(id);

    return null;
  }
*/

  @Mutation(() => User)
  public async deleteUser(@Args('data') input: DeleteUserDto, ): Promise<User> {
    try {
      const message = await this.repoService.userRepo.findOne(input.id);
      const copy = { ...message };
      await this.repoService.userRepo.remove(message);
      return copy;
    } catch (error) {
      error.message = ("Id does not exist");
      return (error);
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'created.' })
  @Mutation(() => User)// é para quando voce quer editar um registro deletar e afins
  public async createOrLoginUser(@Args('data') input: CreateUserDto, ): Promise<User> {
    let user = await this.repoService.userRepo.findOne({
      where: { email: input.email.toLowerCase().trim() },
    });

    if (!user) {
      user = this.repoService.userRepo.create({
        email: input.email.toLowerCase().trim(),
        firstName: input.firstName,

      });

      await this.repoService.userRepo.save(user);
    }

    return user;
  }





}


