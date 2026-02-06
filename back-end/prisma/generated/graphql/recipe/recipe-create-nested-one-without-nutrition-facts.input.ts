import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionFactsInput } from './recipe-create-without-nutrition-facts.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionFactsInput } from './recipe-create-or-connect-without-nutrition-facts.input';
import { Prisma } from '../../prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutNutritionFactsInput {

    @Field(() => RecipeCreateWithoutNutritionFactsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionFactsInput)
    create?: RecipeCreateWithoutNutritionFactsInput;

    @Field(() => RecipeCreateOrConnectWithoutNutritionFactsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionFactsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutNutritionFactsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
