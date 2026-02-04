import { ConfigService } from "@nestjs/config";
import { ApolloDriverConfig } from "@nestjs/apollo"

interface GraphQLContext {
    reg: Request
    res: Response
}

export const getGraphQLConfig = (
    configService: ConfigService
): ApolloDriverConfig => ({
    autoSchemaFile: true,
    playground: configService.get<string>('MODE') === 'development',
    context: ({reg, res}: GraphQLContext): GraphQLContext => ({reg, res}),
    sortSchema: true
})
