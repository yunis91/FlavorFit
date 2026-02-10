import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/prisma/enums'

import { User } from 'prisma/generated/graphql/user'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { UsersService } from './users.service'
import { UserUpdateCustomInput } from './inputs/user-update.input'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { name: 'profile' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Mutation(() => User)
	@Auth()
	updateProfile(
		@CurrentUser('id') id: string,
		@Args('data') input: UserUpdateCustomInput
	) {
		return this.usersService.updateProfile(id, input)
	}

	/* test */
	@Query(() => [User], { name: 'users' })
	@Auth(Role.ADMIN)
	async getUsers() {
		return this.usersService.findAll()
	}
}
