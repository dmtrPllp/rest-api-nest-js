import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @Post('create')
    async create(@Body() userDto: CreateUserDto) {
        return await this.userService.create(userDto);
    }

    @Get('getall')
    async getAll() {
        return await this.userService.getAll();
    }
}
