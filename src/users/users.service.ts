import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService){

    }

    async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAll() {
        const users = await this.userRepository.findAll();
        return users;
    }
}
