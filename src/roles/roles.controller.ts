import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {

    }

    @Post('create')
    async create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto);
    }
    
    @Get('getrole/:value')
    async getRole(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
