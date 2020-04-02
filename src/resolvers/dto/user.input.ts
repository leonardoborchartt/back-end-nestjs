import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class CreateUserDto {
  @Field()
  readonly email: string;
  @Field()
  readonly firstName: string;
}

@InputType()
export class DeleteUserDto {
  @Field()
  readonly id: number;

}
