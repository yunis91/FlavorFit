import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalGoal } from './nutritional-goal.enum';

@InputType()
export class EnumNutritionalGoalFilter {

    @Field(() => NutritionalGoal, {nullable:true})
    equals?: `${NutritionalGoal}`;

    @Field(() => [NutritionalGoal], {nullable:true})
    in?: Array<`${NutritionalGoal}`>;

    @Field(() => [NutritionalGoal], {nullable:true})
    notIn?: Array<`${NutritionalGoal}`>;

    @Field(() => EnumNutritionalGoalFilter, {nullable:true})
    not?: EnumNutritionalGoalFilter;
}
