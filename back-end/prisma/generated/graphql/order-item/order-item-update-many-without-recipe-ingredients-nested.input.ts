import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutRecipeIngredientsInput } from './order-item-create-without-recipe-ingredients.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutRecipeIngredientsInput } from './order-item-create-or-connect-without-recipe-ingredients.input';
import { OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientsInput } from './order-item-upsert-with-where-unique-without-recipe-ingredients.input';
import { OrderItemCreateManyRecipeIngredientsInputEnvelope } from './order-item-create-many-recipe-ingredients-input-envelope.input';
import { Prisma } from '../../prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientsInput } from './order-item-update-with-where-unique-without-recipe-ingredients.input';
import { OrderItemUpdateManyWithWhereWithoutRecipeIngredientsInput } from './order-item-update-many-with-where-without-recipe-ingredients.input';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';

@InputType()
export class OrderItemUpdateManyWithoutRecipeIngredientsNestedInput {

    @Field(() => [OrderItemCreateWithoutRecipeIngredientsInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutRecipeIngredientsInput)
    create?: Array<OrderItemCreateWithoutRecipeIngredientsInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutRecipeIngredientsInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutRecipeIngredientsInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutRecipeIngredientsInput>;

    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientsInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientsInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientsInput>;

    @Field(() => OrderItemCreateManyRecipeIngredientsInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyRecipeIngredientsInputEnvelope)
    createMany?: OrderItemCreateManyRecipeIngredientsInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientsInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientsInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientsInput>;

    @Field(() => [OrderItemUpdateManyWithWhereWithoutRecipeIngredientsInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutRecipeIngredientsInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutRecipeIngredientsInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}
