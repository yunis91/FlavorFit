import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionFactsInput } from './recipe-create-without-nutrition-facts.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionFactsInput } from './recipe-create-or-connect-without-nutrition-facts.input';
import { RecipeUpsertWithoutNutritionFactsInput } from './recipe-upsert-without-nutrition-facts.input';
import { Prisma } from '../../prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutNutritionFactsInput } from './recipe-update-to-one-with-where-without-nutrition-facts.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutNutritionFactsNestedInput {

    @Field(() => RecipeCreateWithoutNutritionFactsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionFactsInput)
    create?: RecipeCreateWithoutNutritionFactsInput;

    @Field(() => RecipeCreateOrConnectWithoutNutritionFactsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionFactsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutNutritionFactsInput;

    @Field(() => RecipeUpsertWithoutNutritionFactsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutNutritionFactsInput)
    upsert?: RecipeUpsertWithoutNutritionFactsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutNutritionFactsInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutNutritionFactsInput)
    update?: RecipeUpdateToOneWithWhereWithoutNutritionFactsInput;
}
