import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService) {

    }

    async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        if(role!=null){
            user.$set('roles', [role!.id]);
            user.roles = [role!];
        }
        else throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR);
        return user;
    }

    async getAll() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
}
