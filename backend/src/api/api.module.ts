import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfmUser } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // import entities here
      OfmUser,
    ]),
  ],
  providers: [
    // import services here
    UserService,
    // import resolvers here
    UserResolver,
  ],
  exports: [],
})
export class ApiModule {}
