import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ProductTypeEntity } from 'src/product-in-command/entities/product-in-command.entity';

@Injectable()
export class ProductTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductTypeDto: CreateProductTypeDto) {
    try {
      const productType = await this.prisma.productType.create({
        data: createProductTypeDto
      });

      return new ProductTypeEntity(productType)
    } catch (error) {
      throw new BadRequestException('Request body not valid');
    }
  }

  findAll() {
    return `This action returns all productType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productType`;
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return `This action updates a #${id} productType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productType`;
  }
}
 

