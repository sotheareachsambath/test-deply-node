import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John', default: 'John' })
  firstName: string = 'John';

  @ApiProperty({ example: 'Doe', default: 'Doe' })
  lastName: string = 'Doe';

  @ApiProperty({
    example: 'john.doe@example.com',
    default: 'john.doe@example.com',
  })
  email: string = 'john.doe@example.com';

  @ApiProperty({ example: 'Developer', default: 'Developer' })
  position: string = 'Developer';

  @ApiProperty({ example: 60000, default: 60000 })
  salary: number = 60000;
}
