import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
        data: createProductDto
    });
    return new ProductEntity(product);
  }
  async findAll() {
    const products = await this.prisma.product.findMany();

    return products.map((product) => new ProductEntity(product));
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id
      }
    });

    if (!product) throw new NotFoundException(`Product ${id} doesn't exist`);

    return new ProductEntity(product);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.prisma.product.update({
        where: {
          id
        },
        data: updateProductDto
      });
  
      return new ProductEntity(product);
    } catch (error) {
      if (error.code == 'P2025') throw new NotFoundException(`Product ${id} doesn't exist`);
      throw new BadRequestException('Request body not valid');
    }
  }

  async remove(id: number) {
    try {
      const product = await this.prisma.product.delete({
        where: {
          id
        }
      });
  
      return new ProductEntity(product);
    } catch (error) {
      throw new NotFoundException(`Product ${id} doesn't exist`);
    }
  }
}