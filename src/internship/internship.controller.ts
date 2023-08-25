import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InternshipService } from './internship.service';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';

@Controller('internship')
export class InternshipController {
  constructor(private readonly internshipService: InternshipService) {}

  @Post('create')
  create(@Body() createInternshipDto: CreateInternshipDto) {
    return this.internshipService.create(createInternshipDto);
  }

  @Get()
  findAll() {
    return this.internshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internshipService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternshipDto: CreateInternshipDto) {
    return this.internshipService.update(id, updateInternshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internshipService.remove(id);
  }

  @Post(':id/connect')
  connect(@Param('id') id: string, @Query('id') typeId: string) {
    return this.internshipService.connectAchivement(id, typeId);
  }

  @Get(':id/achivements')
  achivements(@Param('id') id: string) {
    return this.internshipService.getAchivements(id);
  }
}
