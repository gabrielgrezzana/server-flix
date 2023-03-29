import { Module } from '@nestjs/common';
import { NetflixService } from './netflix.service';
import { NetflixController } from './netflix.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NetflixController],
  providers: [NetflixService],
})
export class NetflixModule {}
