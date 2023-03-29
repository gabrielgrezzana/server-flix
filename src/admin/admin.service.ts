import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';
import { AdminRepository } from './admin.repository';
import { Exception } from 'src/utils/exceptions/exceptions';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { error } from 'console';

@Injectable()
export class AdminService {
  constructor(private readonly repository: AdminRepository) {}

  async findAll(): Promise<AdminEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new error({ message: '' });
    }
  }

  async create(dto: CreateAdminDto): Promise<AdminEntity> {
    try {
      const adm: AdminEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(adm);
    } catch (err) {
      throw new error({ message: '' });
    }
  }

  async findOne(id: string): Promise<AdminEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new error({ message: '' });
    }
  }

  async update(id: string, dto: UpdateAdminDto): Promise<AdminEntity> {
    try {
      await this.findOne(id);
      const adm: Partial<AdminEntity> = { ...dto };
      return await this.repository.update(id, adm);
    } catch (err) {
      throw new error({ message: '' });
    }
  }

  async delete(id: string) {
    try {
      await this.repository.delete(id);
    } catch (err) {
      throw new error({ message: '' });
    }
  }
}
