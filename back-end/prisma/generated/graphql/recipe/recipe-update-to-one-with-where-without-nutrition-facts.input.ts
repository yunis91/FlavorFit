import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutNutritionFactsInput } from './recipe-update-without-nutrition-facts.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutNutritionFactsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutNutritionFactsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionFactsInput)
    data!: RecipeUpdateWithoutNutritionFactsInput;
}
