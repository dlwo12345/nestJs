import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // entry point
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId): string {
    return `this will return all movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `this will patch a movie with the id: ${movieId}`;
  }
}
