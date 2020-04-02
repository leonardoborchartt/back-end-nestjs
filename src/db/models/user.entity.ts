import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
@Entity({ name: 'users' })
export default class User {
  @ApiProperty({ example: '1', description: 'The id of the User' })
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'leonardo@hotmail.com', description: 'The email of the User' })
  @Field()
  @Column()
  email: string;

  @ApiProperty({ example: 'Leonardo', description: 'The first name of the User' })
  @Field()
  @Column()
  firstName: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  //22
}
