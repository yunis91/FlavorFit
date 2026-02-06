import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutRecipeIngredientsInput } from './order-item-create-without-recipe-ingredients.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutRecipeIngredientsInput } from './order-item-create-or-connect-without-recipe-ingredients.input';
import { OrderItemCreateManyRecipeIngredientsInputEnvelope } from './order-item-create-many-recipe-ingredients-input-envelope.input';
import { Prisma } from '../../prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@InputType()
export class OrderItemCreateNestedManyWithoutRecipeIngredientsInput {

    @Field(() => [OrderItemCreateWithoutRecipeIngredientsInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutRecipeIngredientsInput)
    create?: Array<OrderItemCreateWithoutRecipeIngredientsInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutRecipeIngredientsInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutRecipeIngredientsInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutRecipeIngredientsInput>;

    @Field(() => OrderItemCreateManyRecipeIngredientsInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyRecipeIngredientsInputEnvelope)
    createMany?: OrderItemCreateManyRecipeIngredientsInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}
