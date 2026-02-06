import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemUpdateWithoutRecipeIngredientsInput } from './order-item-update-without-recipe-ingredients.input';

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientsInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemUpdateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutRecipeIngredientsInput)
    data!: OrderItemUpdateWithoutRecipeIngredientsInput;
}
