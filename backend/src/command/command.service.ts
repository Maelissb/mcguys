import { Injectable } from '@nestjs/common';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import { CommandEntity } from './entities/command.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CommandService {
  constructor(private prisma: PrismaService) {}

  async create(createCommandDto: CreateCommandDto) {
    const command = await this.prisma.command.create({
      data: {
        total: createCommandDto.total,
        productInCommand: {
          create: createCommandDto.products
        }
      }
    });

    return new CommandEntity(command);
  }

  async findAll() {
    const commands = await this.prisma.command.findMany({
      include: {
        productInCommand: {
          include: {
            product: true
          }
        }
      }
  });

    return commands.map((command) => new CommandEntity(command));
  }

  async findOne(id: number) {
    const command = await this.prisma.command.findUnique({
      where: {
        id
      }
    });
    return new CommandEntity(command);
  }

  async update(id: number, updateCommandDto: UpdateCommandDto) {
    const command = await this.prisma.command.update({
      where: {
        id
      },
      data: updateCommandDto
    });
    return new CommandEntity(command)
  }

  async remove(id: number) {
    const command = await this.prisma.command.delete({
      where:{
        id
      }
    });
    return new CommandEntity(command)
  }
}
