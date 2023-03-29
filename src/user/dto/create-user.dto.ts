import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Gabriel grezzana',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'CPF do usuário',
    example: '00000000000',
  })
  cpf: string;

  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'email@email.com.br',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Senha do usuário',
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
