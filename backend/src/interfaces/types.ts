import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  id: number;
  firstName: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}
