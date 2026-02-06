import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateManyRecipeIngredientsInput } from './order-item-create-many-recipe-ingredients.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemCreateManyRecipeIngredientsInputEnvelope {

    @Field(() => [OrderItemCreateManyRecipeIngredientsInput], {nullable:false})
    @Type(() => OrderItemCreateManyRecipeIngredientsInput)
    data!: Array<OrderItemCreateManyRecipeIngredientsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
