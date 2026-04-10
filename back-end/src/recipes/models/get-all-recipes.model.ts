import { RecipeModel } from "./recipe.model";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GetAllRecipesModel {
  @Field(() => [RecipeModel])
  items!: RecipeModel[];

  @Field(() => Boolean)
  hasMore!: boolean;

  @Field(() => Int)
  total!: number;
}
