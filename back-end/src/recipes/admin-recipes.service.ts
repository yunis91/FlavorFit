import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {IngredientCreateInput} from "./ingredients/inputs/create-ingredients.input";

@Injectable()
export class AdminRecipesService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.recipe.findMany()
    }

    //admin only
    async getById(id: string) {
        const recipe = await this.prisma.recipe.findUnique({
            where: { id }
        })

        if (!recipe) {
            throw new NotFoundException(`Ingredient with ID ${id} noy found`)
        }
        return recipe
    }

    // create(data: IngredientCreateInput) {
    //     return this.prisma.ingredient.create({
    //         data
    //     })
    // }
    //
    // update(id: string, data: IngredientCreateInput) {
    //     return this.prisma.recipe.update({
    //         where: {id},
    //         data
    //     })
    // }

    //admin only
    deleteById(id: string) {
        return this.prisma.recipe.delete({
            where: {id}
        })
    }
}
