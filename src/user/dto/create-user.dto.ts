import { Exclude } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty({ message: 'Name cannot be null or empty' })
    name!: string 

    @IsInt()
    @IsNotEmpty({ message: 'Age cannot be null or empty' })
    age!: number

    @IsString()
    @IsNotEmpty({ message: 'Email cannot be null or empty' })
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty({ message: 'Password cannot be null or empty' })
    password!: string

}
