import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @ApiProperty({
    description: 'nome de administrador',
    example: 'Mateus Santiago',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Email',
    example: 'exemplo@exemplo.com.br',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Senha',
    example: 'secret',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Confirmação da senha',
    example: 'secret',
  })
  confirmPassword: string;
}
