import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createEventDto: CreateEventDto) {
    return await this.prismaService.event.create({
      data: {
        ...createEventDto
      }
    });
  }

  async findAll() {
    return await this.prismaService.event.findMany({
      orderBy: {
        date: "asc"
      }
    });
  }
  
  async findAllFrom(filter: Date) {
    return await this.prismaService.event.findMany({
      where: {
        date: {
          gte: filter
        }
      },
      orderBy: {
        date: "asc"
      }
    });
  }

  async findOne(id: string) {
    return await this.prismaService.event.findFirst({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateEventDto: CreateEventDto) {
    return await this.prismaService.event.update({
      where: {
        id: id
      },
      data: {
        ...updateEventDto
      }
    });
  }

  async remove(id: string) {
    await this.prismaService.event.delete({
      where: {
        id: id
      }
    });
  }

  async connectAchivement(id: string, typeId: string) {
    await this.prismaService.eventOnType.create({
      data: {
        eventId: id,
        typeId: typeId
      }
    });
  }

  async review(id: string) {
    await this.prismaService.event.update({
      where: {
        id: id
      },
      data: {
        isReviewed: true
      }
    });
  }

  async getAchivements(id: string) {
    return await this.prismaService.eventOnType.findMany({
      where: {
        eventId: id
      },
      include: {
        type: true
      }
    });
  }

  async getUsers(id: string) {
    return await this.prismaService.savedEvent.findMany({
      where: {
        eventId: id
      }
    });
  }

  async feedback(id: string, content: string) {
    // TODO tgBot
  }

  async setRank(userId: string, eventId: string, rank: number) {
    return await this.prismaService.savedEvent.update({
      where: {
        userId_eventId: {
          userId: userId,
          eventId: eventId
        }
      },
      data: {
        rank: rank
      }
    });
  }

  async getRank(id: string) {
    return await this.prismaService.savedEvent.findMany({
      where: {
        eventId: id
      }
    })
  }

  async addRecord(id: string, link: string) {
    return await this.prismaService.event.update({
      where: {
        id: id
      },
      data: {
        record: link
      }
    })
  }
}
