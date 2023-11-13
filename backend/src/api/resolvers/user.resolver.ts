import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { OfmUser } from '../entities/user.entity';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [OfmUser])
  async getAllUsers(): Promise<OfmUser[]> {
    return await this.userService.getAllUsers();
  }
}
