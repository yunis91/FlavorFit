import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemCreateWithoutRecipeIngredientsInput } from './order-item-create-without-recipe-ingredients.input';

@InputType()
export class OrderItemCreateOrConnectWithoutRecipeIngredientsInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemCreateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutRecipeIngredientsInput)
    create!: OrderItemCreateWithoutRecipeIngredientsInput;
}
