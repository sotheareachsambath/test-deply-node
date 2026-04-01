import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: '1990-01-15T00:00:00.000Z' })
  dob: string;

  @ApiProperty({ example: 'Male' })
  sex: string;

  @ApiProperty({ example: 'Developer' })
  position: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;
}
