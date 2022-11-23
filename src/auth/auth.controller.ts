import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authservice: AuthService) { }

    @Post('login')
    async login(@Body() userDto: CreateUserDto) {
        return this.authservice.login(userDto);
    }

    @Post('registration')
    async registration(@Body() userDto: CreateUserDto) {
        return this.authservice.registration(userDto);
    }
}
