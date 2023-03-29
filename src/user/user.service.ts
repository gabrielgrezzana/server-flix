import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException, '');
    }
  }

  async create(dto: CreateUserDto): Promise<UserEntity> {
    try {
      if (dto.password != dto.confirmPassword && dto.password.length <= 7) {
        throw new Exceptions(
          Exception.InvalidData,
          'O confirmPassword precisa ser igual ao Password e password não pode conter menos de 8 caracteres',
        );
      }

      delete dto.confirmPassword;

      const user: UserEntity = {
        ...dto,
        id: randomUUID(),
        password: await bcrypt.hash(dto.password, 10),
      };

      return await this.repository.create(user);
    } catch (err) {
      throw new Exceptions(Exception.InvalidData, '');
    }
  }

  async findOne(id: string): Promise<UserEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException, '');
    }
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    try {
      if (dto.password) {
        if (dto.password != dto.confirmPassword && dto.password.length <= 7) {
          throw new Exceptions(
            Exception.InvalidData,
            'O confirmPassword precisa ser igual ao Password e password não pode conter menos de 8 caracteres',
          );
        }
      }
      delete dto.confirmPassword;

      await this.findOne(id);
      const user: Partial<UserEntity> = { ...dto };
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
      return await this.repository.update(id, user);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException, '');
    }
  }

  async delete(id: string) {
    try {
      await this.findOne(id);
      await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException, '');
    }
  }
}
