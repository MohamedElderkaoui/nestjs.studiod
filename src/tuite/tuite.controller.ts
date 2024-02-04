import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import {TuiteService} from './tuite.service';
@Controller('tuite')
export class TuiteController {
  constructor(private  readonly TuiteService: TuiteService) {}
  //get
  @Get()
  get(@Query() filterQuery): string {
    const { searchTerm, orderBy } = filterQuery;
    return ` all tuites ${searchTerm} ${orderBy}`;
  }

  @Get(':id')
  getTuite(@Param() a, @Query() qr) {
    return `you want tuite ${a.id}`;
  }

  @Post()
  createTuite(@Body('message') message: string) {
    return `you tuite ${message}`;
  }
  @Patch('id')
  updateTuit(@Param('id') id: string) {
    return `you tuite ${id}  updated`;
  }
  @Delete('id')
  deleeTuit(@Param('id') id: string): string {
    return `you tuite ${id}  deleted`;
  }
}
