import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class CreateUserDto {
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
  @Field()
  readonly cityLive: string;
  @Field()
  readonly birthDay: Date;

}
@InputType()
export class DeleteUserDto {
  @Field()
  readonly id: number;
}

@InputType()
export class UpdateUserNameDto {
  @Field()
  readonly id: number;
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
  

}
