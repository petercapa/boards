import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Boards } from 'src/boards/boards.entity';
import { Users } from 'src/users/users.entity';

@ObjectType()
@Entity()
export class Comments {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('text')
    contents: string;

    @Field()
    @Column('int')
    comments_id: number;

    @Field()
    @UpdateDateColumn()
    updated_at: Date;

    @Field()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @Column('tinyint', { default: 0 })
    is_deleted: number;

    @ManyToOne(() => Boards, board => board.comments)
    boards: Boards;

    @ManyToOne(() => Users, user => user.comments)
    users: Users;
}