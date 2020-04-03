import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
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

  @ApiProperty({ example: 'Leonardo', description: 'The first name of the User' })
  @Field()
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Leonardo', description: 'The first name of the User' })
  @Field() 
  @Column()
  lastName: string;
  
  @ApiProperty({ example: 'Leonardo', description: 'The first name of the User' })
  @Field()
  @Column()
  cityLive: string;
  @ApiProperty({ example: 'Leonardo', description: 'The first name of the User' })
  @Field()
  @Column()
  birthDay: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
