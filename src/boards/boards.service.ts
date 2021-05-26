import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Boards } from '../entities/boards.entity';
import { Comments } from '../entities/comments.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Boards)
    private boardRepository: Repository<Boards>,
    @InjectRepository(Comments)
    private commentRepository: Repository<Comments>
  ) {}

  findById(id: number): Promise<Boards> {
    console.log("get board by id in service")
    return this.boardRepository.findOne(id);
  }

  findBoards(): Promise<Boards[]> {
    console.log("get Boards in service")
    return this.boardRepository.find();
  }

  async create(board): Promise<Boards> {

    return await this.boardRepository.save(board);
  }

  async update(board): Promise<Boards> {

    return await this.boardRepository.save({ id: board.id, email: board.email });
  }

  async getComments(id: number): Promise<Comments[]> {
    console.log("get comments in service")

    return await this.commentRepository.find({ where: { boards: id } });
  }
}