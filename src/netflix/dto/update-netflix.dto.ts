import { PartialType } from '@nestjs/swagger';
import { CreateNetflixDto } from './create-netflix.dto';

export class UpdateNetflixDto extends PartialType(CreateNetflixDto) {}
