import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import User from '../db/models/user.entity';
import CreateUserDto, { DeleteUserDto, UpdateUserNameDto } from './dto/user.input';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';



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

    const user = this.repoService.userRepo.findOne(id);
    return user;
  }

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

  @Mutation(() => User)
  public async createUser(@Args('data') input: CreateUserDto, ): Promise<User> {
    const user = this.repoService.userRepo.create({
      firstName: input.firstName.toLowerCase(),
      lastName: input.lastName.toLowerCase(),
      cityLive: input.cityLive.toLowerCase(),
      birthDay: input.birthDay
    });
    await this.repoService.userRepo.save(user);
    return user;
  }

  @Mutation(() => User)
  public async updateNameUser(@Args('data') input: UpdateUserNameDto, ): Promise<User> {
    const oldUser = await this.repoService.userRepo.findOne(input.id);
    oldUser.firstName = input.firstName;
    oldUser.lastName = input.lastName;
    await this.repoService.userRepo.save(oldUser);
    return oldUser;
  }
}


