import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movies.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly repository: MovieRepository) {}

  async findAll(): Promise<MovieEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException, '');
    }
  }

  async create(dto: CreateMovieDto): Promise<MovieEntity> {
    try {
      const movie: MovieEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(movie);
    } catch (err) {
      throw new Exceptions(Exception.InvalidData, '');
    }
  }

  async findOne(id: string): Promise<MovieEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException, '');
    }
  }

  async update(id: string, dto: UpdateMovieDto): Promise<MovieEntity> {
    try {
      await this.findOne(id);
      const movie: Partial<MovieEntity> = { ...dto };
      return await this.repository.update(id, movie);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException, '');
    }
  }

  async delete(id: string) {
    try {
      await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException, '');
    }
  }
}
