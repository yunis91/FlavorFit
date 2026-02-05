import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Role } from 'prisma/generated/prisma/enums'
import {User} from "prisma/generated/models/user";

export interface IAuthTokenData {
    id: string
    role: Role
}

export type TAuthTokenData = Pick<User, 'id' | 'role'>

export type TCurrentUser = Omit<User, 'password'>

export type TRequestWithUser = {
    user?: TCurrentUser
}


@ObjectType()
export class AuthResponse {
    @Field(() => User)
    user: User

    @Field()
    accessToken: string
}
