import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionFactsInput } from './recipe-create-without-nutrition-facts.input';

@InputType()
export class RecipeCreateOrConnectWithoutNutritionFactsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutNutritionFactsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionFactsInput)
    create!: RecipeCreateWithoutNutritionFactsInput;
}
