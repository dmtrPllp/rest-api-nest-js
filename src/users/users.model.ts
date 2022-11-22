import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example:'1', description: 'Unique identifier'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example:'user@mail.ru', description: 'Mail adress'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example:'12345', description: 'Password value'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example:'false', description: 'Ban flag'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example:'swear words', description: 'Ban reason'})
    @Column({ type: DataType.STRING, unique: true, allowNull: true })
    banReason: string;
}