import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateNetflixDto } from './dto/create-netflix.dto';
import { NetflixService } from './netflix.service';

@ApiTags('Netflix')
@Controller('netflix')
export class NetflixController {
  constructor(private readonly netflixService: NetflixService) {}

  @ApiOperation({
    summary: 'Adicionar um filme aos favoritos',
  })
  @Post()
  create(@Body() createNetflixDto: CreateNetflixDto) {
    return this.netflixService.create(createNetflixDto);
  }

  @ApiOperation({
    summary: 'Visualizar todos os filmes',
  })
  @Get()
  findAll() {
    return this.netflixService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar um filme pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.netflixService.findOne(id);
  }
}
