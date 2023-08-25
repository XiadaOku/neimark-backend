import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('create')
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: CreateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Get(':id/review')
  review(@Param('id') id: string) {
    return this.eventsService.review(id);
  }

  @Post(':id/achivements/connect')
  connect(@Param('id') id: string, @Query('id') typeId: string) {
    return this.eventsService.connectAchivement(id, typeId);
  }

  @Get(':id/achivements')
  achivements(@Param('id') id: string) {
    return this.eventsService.getAchivements(id);
  }

  @Post(':id/rank')
  setRank(@Param('id') id: string, @Query('userId') userId: string, @Query('rank') rank: number) {
    return this.eventsService.setRank(userId, id, rank)
  }

  @Get(':id/rank')
  getRank(@Param('id') id: string) {
    return this.eventsService.getRank(id)
  }
}
