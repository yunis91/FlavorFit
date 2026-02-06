import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class RecipesService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.recipe.findMany()
    }

    async getBySlug(slug: string) {
        const recipe = await this.prisma.recipe.findUnique({
            where: { slug },
            include: {
                recipeSteps: true,
                recipeIngredients: true
            }
        })

        if (!recipe) {
            throw new NotFoundException(`Ingredient with slug ${slug} noy found`)
        }
        return recipe
    }
}
