import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'John', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: 'Doe', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ example: '1990-01-15', required: false })
  @IsDateString()
  @IsOptional()
  dob?: string;

  @ApiProperty({ example: 'Male', required: false })
  @IsString()
  @IsOptional()
  sex?: string;

  @ApiProperty({ example: 'Developer', required: false })
  @IsString()
  @IsOptional()
  position?: string;

  @ApiProperty({ example: 'john.doe@example.com', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;
}
