import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityLevel } from '../prisma/activity-level.enum';
import { NutritionalGoal } from '../prisma/nutritional-goal.enum';

@InputType()
export class BodyMeasurementCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    heightCm?: number;

    @Field(() => Int, {nullable:true})
    weightKg?: number;

    @Field(() => Int, {nullable:true})
    goalWeightKg?: number;

    @Field(() => Int, {nullable:true})
    chestCm?: number;

    @Field(() => Int, {nullable:true})
    waistCm?: number;

    @Field(() => Int, {nullable:true})
    thighCm?: number;

    @Field(() => Int, {nullable:true})
    armCm?: number;

    @Field(() => ActivityLevel, {nullable:true})
    activityLevel?: `${ActivityLevel}`;

    @Field(() => NutritionalGoal, {nullable:true})
    nutritionalGoal?: `${NutritionalGoal}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
