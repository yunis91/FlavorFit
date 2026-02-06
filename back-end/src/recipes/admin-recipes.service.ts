import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipeCreateInput } from "./inputs/recipe.input";

@Injectable()
export class AdminRecipesService {
  constructor(private readonly prisma: PrismaService) {}

  getAll() {
    return this.prisma.recipe.findMany();
  }

  //admin only
  async getById(id: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) {
      throw new NotFoundException(`recipe with ID ${id} not found`);
    }
    return recipe;
  }

  create(
    authorId: string,
    {
      recipeSteps,
      nutritionFact,
      ingredientsIds,
      tags,
      ...data
    }: RecipeCreateInput,
  ) {
    return this.prisma.recipe.create({
      data: {
        ...data,
        author: {
          connect: {
            id: authorId,
          },
        },
        ...(!!nutritionFact && {
          nutritionFact: {
            create: nutritionFact,
          },
        }),
        recipeSteps: {
          create: recipeSteps,
        },
        ...(!!ingredientsIds?.length && {
          recipeIngredients: {
            create: ingredientsIds.map((ingredientId, index) => ({
              ingredientId,
              quantity: 1,
              order: index,
            })),
          },
        }),
        ...(!!tags?.length && {
          tags: {
            connectOrCreate: tags.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
        }),
      },
    });
  }

  update(
    authorId: string,
    {
      recipeSteps,
      nutritionFact,
      ingredientsIds,
      tags,
      ...data
    }: RecipeCreateInput,
  ) {
    return this.prisma.recipe.update({
      where: { id },
      data: {
        ...data,
        ...(nutritionFact && {
          nutritionFact: {
            upsert: {
              create: nutritionFact,
              update: nutritionFact,
            },
          },
        }),
        ...(recipeSteps && {
          recipeSteps: {
            deleteMany: {},
            create: recipeSteps.map((step) => ({
              title: step.title,
              description: step.description,
              order: step.order,
            })),
          },
        }),
        ...(ingredientsIds && {
          recipeIngredients: {
            deleteMany: {},
            create: ingredientsIds.map((ingredientId, index) => ({
              ingredientId,
              quantity: 1,
              order: index,
            })),
          },
        }),
        ...(tags && {
          tags: {
            set: [],
            connectOrCreate: tags.map((tagName) => ({
              where: { name: tagName },
              create: { name: tagName },
            })),
          },
        }),
      },
    });
  }

  //admin only
  deleteById(id: string) {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}
