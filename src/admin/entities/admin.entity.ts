import { validate, IsEmail } from '@nestjs/class-validator';

export interface AdminEntity {
  id: string;

  name: string;

  email: string;

  password: string;

  confirmPassword: string;
}
