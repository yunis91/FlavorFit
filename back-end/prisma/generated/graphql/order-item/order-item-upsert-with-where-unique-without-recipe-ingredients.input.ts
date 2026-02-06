import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemUpdateWithoutRecipeIngredientsInput } from './order-item-update-without-recipe-ingredients.input';
import { OrderItemCreateWithoutRecipeIngredientsInput } from './order-item-create-without-recipe-ingredients.input';

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientsInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemUpdateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutRecipeIngredientsInput)
    update!: OrderItemUpdateWithoutRecipeIngredientsInput;

    @Field(() => OrderItemCreateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutRecipeIngredientsInput)
    create!: OrderItemCreateWithoutRecipeIngredientsInput;
}
