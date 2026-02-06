import { registerEnumType } from '@nestjs/graphql';

export enum NutritionalGoal {
    WEIGHT_LOSS = "WEIGHT_LOSS",
    MAINTENANCE = "MAINTENANCE",
    MUSCLE_GAIN = "MUSCLE_GAIN"
}


registerEnumType(NutritionalGoal, { name: 'NutritionalGoal', description: undefined })
