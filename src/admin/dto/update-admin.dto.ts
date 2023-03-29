import { CreateAdminDto } from './createAdmin.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  id: string;
}
