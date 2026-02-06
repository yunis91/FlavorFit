import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalGoal } from './nutritional-goal.enum';
import { IntFilter } from './int-filter.input';
import { EnumNutritionalGoalFilter } from './enum-nutritional-goal-filter.input';

@InputType()
export class EnumNutritionalGoalWithAggregatesFilter {

    @Field(() => NutritionalGoal, {nullable:true})
    equals?: `${NutritionalGoal}`;

    @Field(() => [NutritionalGoal], {nullable:true})
    in?: Array<`${NutritionalGoal}`>;

    @Field(() => [NutritionalGoal], {nullable:true})
    notIn?: Array<`${NutritionalGoal}`>;

    @Field(() => EnumNutritionalGoalWithAggregatesFilter, {nullable:true})
    not?: EnumNutritionalGoalWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumNutritionalGoalFilter, {nullable:true})
    _min?: EnumNutritionalGoalFilter;

    @Field(() => EnumNutritionalGoalFilter, {nullable:true})
    _max?: EnumNutritionalGoalFilter;
}
