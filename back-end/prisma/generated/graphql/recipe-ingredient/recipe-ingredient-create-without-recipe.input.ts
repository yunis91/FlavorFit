import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { IngredientCreateNestedOneWithoutRecipesIngredientInput } from '../ingredient/ingredient-create-nested-one-without-recipes-ingredient.input';
import { OrderItemCreateNestedManyWithoutRecipeIngredientsInput } from '../order-item/order-item-create-nested-many-without-recipe-ingredients.input';

@InputType()
export class RecipeIngredientCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => IngredientCreateNestedOneWithoutRecipesIngredientInput, {nullable:false})
    ingredient!: IngredientCreateNestedOneWithoutRecipesIngredientInput;

    @Field(() => OrderItemCreateNestedManyWithoutRecipeIngredientsInput, {nullable:true})
    orderItems?: OrderItemCreateNestedManyWithoutRecipeIngredientsInput;
}
