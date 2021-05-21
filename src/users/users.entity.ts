import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Boards } from 'src/boards/boards.entity';
import { Comments } from 'src/comments/comments.entity';

@ObjectType()
@Entity()
export class Users {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('text')
    email: string;

    @Field()
    @Column('text')
    password: string;

    @Field()
    @UpdateDateColumn()
    updated_at: Date;

    @Field()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @Column('tinyint', { default: 0 })
    is_deleted: number;

    // @Field(() => [Boards])
    // @OneToMany(() => Boards, board => board.id)
    // boards: Boards[];

    @Field(() => [Comments])
    @OneToMany(() => Comments, comments => comments.users)
    comments: Comments[];
}