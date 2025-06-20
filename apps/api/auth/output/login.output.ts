import { ApiProperty } from '@nestjs/swagger';

export class LoginOutput {
  @ApiProperty()
  csrfToken: string;

  @ApiProperty({ example: '2024-10-01T12:00:00.000Z' })
  expiresAt: string;
}
