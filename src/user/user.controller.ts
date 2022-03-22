import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Post()
	public create(@Body() user: User): User {
		return this.userService.create(user);
	}

	@Put(':id')
	public update(@Param('id') id: string, @Body() user: User): User {
		return this.userService.update(parseInt(id), user);
	}

	@Get()
	public findAll(): User[] {
		return this.userService.findAll();
	}

	@Get(':id')
	public findById(@Param('id') id: string): User {
		return this.userService.findById(parseInt(id));
	}

	@Delete(':id')
	public deleteById(@Param('id') id: string): void {
		return this.userService.deleteById(parseInt(id));
	}

	@Delete('/delete-selected')
	public deleteSelected(@Body() ids: any) {
		return this.userService.deleteUsers(ids);
	}

	@Post('/is-email-taken')
	public isEmailTaken(@Body() emails: {formEmail: string, currentEmail?: string}): boolean {
		return this.userService.isEmailTaken(emails.formEmail, emails.currentEmail);
	}

 
}
