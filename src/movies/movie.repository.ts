import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieEntity } from './entities/movies.entity';

@Injectable()
export class MovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<MovieEntity[]> {
    try {
      return await this.prisma.movies.findMany();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async create(data: MovieEntity): Promise<MovieEntity> {
    try {
      return await this.prisma.movies.create({ data });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async findOne(id: string): Promise<MovieEntity> {
    try {
      return await this.prisma.movies.findFirstOrThrow({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async update(id: string, data: Partial<MovieEntity>): Promise<MovieEntity> {
    try {
      return await this.prisma.movies.update({ where: { id }, data });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }

  async delete(id: string): Promise<MovieEntity> {
    try {
      return await this.prisma.movies.delete({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException, '');
    }
  }
}
