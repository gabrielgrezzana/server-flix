import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Exceptions } from '../utils/exceptions/exceptionClass';
import { Exception } from '../utils/exceptions/exceptions';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';

@Injectable()
export class AdminRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<AdminEntity[]> {
    try {
      return await this.prisma.admin.findMany();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async create(data: AdminEntity): Promise<AdminEntity> {
    try {
      return await this.prisma.admin.create({ data });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async findOne(id: string): Promise<AdminEntity> {
    try {
      return await this.prisma.admin.findFirstOrThrow({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async update(id: string, data: Partial<AdminEntity>): Promise<AdminEntity> {
    try {
      return await this.prisma.admin.update({ where: { id }, data });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async delete(id: string): Promise<AdminEntity> {
    try {
      return await this.prisma.admin.delete({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }
}
