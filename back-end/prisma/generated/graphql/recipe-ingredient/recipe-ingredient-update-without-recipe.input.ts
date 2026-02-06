import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { IngredientUpdateOneRequiredWithoutRecipesIngredientNestedInput } from '../ingredient/ingredient-update-one-required-without-recipes-ingredient-nested.input';
import { OrderItemUpdateManyWithoutRecipeIngredientsNestedInput } from '../order-item/order-item-update-many-without-recipe-ingredients-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => String, {nullable:true})
    price?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => IngredientUpdateOneRequiredWithoutRecipesIngredientNestedInput, {nullable:true})
    ingredient?: IngredientUpdateOneRequiredWithoutRecipesIngredientNestedInput;

    @Field(() => OrderItemUpdateManyWithoutRecipeIngredientsNestedInput, {nullable:true})
    orderItems?: OrderItemUpdateManyWithoutRecipeIngredientsNestedInput;
}
