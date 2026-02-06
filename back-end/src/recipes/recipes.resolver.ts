import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Role } from "../../prisma/generated/prisma/enums";
import { Auth } from "../auth/decorators/auth.decorator";

import { RecipesService } from "./recipes.service";
import { AdminRecipesService } from "./admin-recipes.service";
import { RecipeModel } from "./models/recipe.model";
import { RecipeCreateInput } from "./inputs/recipe.input";
import { CurrentUser } from "src/auth/decorators/current-user.decorators";

@Resolver()
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly adminRecipeService: AdminRecipesService,
  ) {}

  @Query(() => [RecipeModel], {
    name: "recipes",
  })
  getAll() {
    return this.recipesService.getAll();
  }

  @Query(() => RecipeModel, {
    name: "recipeBySlug",
  })
  getBySlug(@Args("slug") slug: string) {
    return this.recipesService.getBySlug(slug);
  }

  @Query(() => [RecipeModel], {
    name: "admin-recipes",
  })
  @Auth(Role.ADMIN)
  getAllAdmin() {
    return this.adminRecipeService.getAll();
  }

  @Query(() => RecipeModel, {
    name: "recipeById",
  })
  @Auth(Role.ADMIN)
  getById(@Args("id") id: string) {
    return this.adminRecipeService.getById(id);
  }

  @Mutation(() => RecipeModel)
  @Auth(Role.ADMIN)
  createRecipe(
    @CurrentUser("id") authorId: string,
    @Args("input") input: RecipeCreateInput,
  ) {
    return this.adminRecipeService.create(authorId, input);
  }

  @Mutation(() => RecipeModel)
  @Auth(Role.ADMIN)
  updateRecipe(
    @Args("id") id: string,
    @Args("input") input: RecipeCreateInput,
  ) {
    return this.adminRecipeService.update(id, input);
  }

  @Mutation(() => RecipeModel)
  @Auth(Role.ADMIN)
  deleteRecipeById(@Args("id") id: string) {
    return this.adminRecipeService.deleteById(id);
  }
}
