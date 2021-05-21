import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserInput {
  @Field()
  id: number;

  @Field()
  email: string;
}