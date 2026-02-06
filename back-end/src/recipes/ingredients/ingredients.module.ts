import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsResolver } from './ingredients.resolver';
import {PrismaModule} from "src/prisma/prisma.module";
import {AdminRecipesService} from "../admin-recipes.service";

@Module({
  imports: [PrismaModule],
  providers: [IngredientsResolver, IngredientsService, AdminRecipesService],
})
export class IngredientsModule {}
