import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OfmUser } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(OfmUser)
    private userRepository: Repository<OfmUser>,
  ) {}

  async getAllUsers(): Promise<OfmUser[]> {
    return await this.userRepository.find();
  }
}
