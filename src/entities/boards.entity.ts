import { Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/entities/users.entity';
import { Comments } from 'src/entities/comments.entity';

@ObjectType()
@Entity()
export class Boards {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  contents: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @Field()
  @Column()
  test: string;

  @ManyToOne(() => Users, user => user.id)
  users: Users;

  @Field(() => [Comments])
  @OneToMany(() => Comments, comment => comment.boards)
  comments: Comments[];
}