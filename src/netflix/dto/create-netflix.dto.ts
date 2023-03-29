import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateNetflixDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID usuario add favorito',
    example: 'randomkey',
  })
  userId: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID do filme que esta disponivel',
    example: 'randomkey',
  })
  movieId: string;
}
