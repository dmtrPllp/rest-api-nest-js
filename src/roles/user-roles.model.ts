import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';



@Table({ tableName: 'users' , createdAt:false, updatedAt:false})
export class UserRoles extends Model<UserRoles>{
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @ApiProperty({ example: '1', description: 'Unique user identifier' })
    @Column({ type: DataType.INTEGER })
    userId: number;

    @ForeignKey(() => Role)
    @ApiProperty({ example: '1', description: 'Unique role identifier' })
    @Column({ type: DataType.INTEGER })
    roleId: number;




}