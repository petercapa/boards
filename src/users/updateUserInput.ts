import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  nickname?: string;
}