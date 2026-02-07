import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ReactionModule } from './reaction/reaction.module';

@Module({
  providers: [RecipesResolver, RecipesService],
  imports: [IngredientsModule, ReactionModule],
})
export class RecipesModule {}
