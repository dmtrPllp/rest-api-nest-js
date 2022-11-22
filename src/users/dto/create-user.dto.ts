import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    
    @ApiProperty({example:'user@mail.ru', description: 'Mail adress'})
    readonly email:string;

    @ApiProperty({example:'12345', description: 'Password value'})
    readonly password: string;
}