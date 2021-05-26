import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { hash } from 'bcrypt'
import { Comments } from '../entities/comments.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Comments)
    private commentRepository: Repository<Comments>
  ) {}

  findById(id: number): Promise<Users> {
    console.log("get user by id in service")
    return this.userRepository.findOne(id);
  }

  findUsers(): Promise<Users[]> {
    console.log("get users in service")
    return this.userRepository.find();
  }

  async create(user): Promise<Users> {
    user.password = await hash(user.password, 4)

    return await this.userRepository.save(user);
  }

  async update(user): Promise<Users> {
    return await this.userRepository.save(user);
  }

  async getComments(id: number): Promise<Comments[]> {
    console.log("get comments in service")

    return await this.commentRepository.find({ where: { users: id } });
  }
}