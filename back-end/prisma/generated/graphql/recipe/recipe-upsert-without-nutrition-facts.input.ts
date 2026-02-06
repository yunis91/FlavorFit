import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutNutritionFactsInput } from './recipe-update-without-nutrition-facts.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionFactsInput } from './recipe-create-without-nutrition-facts.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutNutritionFactsInput {

    @Field(() => RecipeUpdateWithoutNutritionFactsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionFactsInput)
    update!: RecipeUpdateWithoutNutritionFactsInput;

    @Field(() => RecipeCreateWithoutNutritionFactsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionFactsInput)
    create!: RecipeCreateWithoutNutritionFactsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
