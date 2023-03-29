import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNetflixDto } from './dto/create-netflix.dto';

//@Injectable()
export class NetflixService {
  constructor(private readonly prisma: PrismaService) {}

  create(createNetflixDto: CreateNetflixDto) {
    const data: Prisma.NetflixCreateInput = {
      id: randomUUID().toString(),
      user: {
        connect: {
          id: createNetflixDto.userId.toString(),
        },
      },
      movies: {
        connect: {
          id: createNetflixDto.movieId.toString(),
        },
      },
      admin: null,
    };
    return this.prisma.netflix.create({
      data,
      select: {
        id: true,
        user: {
          select: {
            name: true,
            movies: {
              select: {
                movies: true,
              },
            },
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.netflix.findMany({
      select: {
        id: true,
        user: {
          select: {
            name: true,
            movies: {
              select: {
                movies: {
                  select: {
                    title: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.netflix.findUnique({
      where: { id },
      select: {
        id: true,
        user: {
          select: {
            name: true,
            movies: {
              select: {
                movies: {
                  select: {
                    title: true,
                    description: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
