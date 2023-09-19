import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.type';

@ObjectType()
export class RegisterResponse {
  @Field(() => User, { nullable: true }) // assuming User is another ObjectType you have
  user?: User;
}

ObjectType();
export class LoginResponse {
  @Field(() => User) // assuming User is another ObjectType you have
  user?: User;
}
