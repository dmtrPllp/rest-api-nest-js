import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @ApiOperation({summary:'User creation'})
    @ApiResponse({status:200, type: User})
    @Post('create')
    async create(@Body() userDto: CreateUserDto) {
        return await this.userService.create(userDto);
    }

    @ApiOperation({summary:'User receiving'})
    @ApiResponse({status:200, type: [User]})
    @Get('getall')
    async getAll() {
        return await this.userService.getAll();
    }
}
