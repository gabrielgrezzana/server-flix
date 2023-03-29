import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({
    description: 'Title of movie',
    example: 'One piece',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Description of movie',
    example: 'aventure',
  })
  description: string;

  @IsUrl()
  @ApiProperty({
    description: 'Image of movie',
    example:
      'https://images.unsplash.com/photo-1639520595682-bfb8bce22329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  })
  image: string;
}
