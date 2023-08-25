import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post(':id/achivements/connect')
  connectAchivement(@Param('id') id: string, @Query('id') typeId: string) {
    return this.userService.connectAchivement(id, typeId);
  }

  @Get(':id/achivements')
  achivements(@Param('id') id: string) {
    return this.userService.getAchivements(id);
  }

  @Post(':id/events/connect')
  connectEvent(@Param('id') id: string, @Query('id') eventId: string) {
    return this.userService.connectEvent(id, eventId);
  }

  @Get(':id/events')
  events(@Param('id') id: string, @Query('filter') filter: Date) {
    return this.userService.getEvents(id, filter);
  }

  @Post(':id/internships/connect')
  connectInternship(@Param('id') id: string, @Query('id') internshipId: string) {
    return this.userService.connectInternship(id, internshipId);
  }

  @Get(':id/internships')
  internships(@Param('id') id: string) {
    return this.userService.getInternships(id);
  }
}
