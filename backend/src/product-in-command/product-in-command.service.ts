import { Injectable } from '@nestjs/common';
import { CreateProductInCommandDto } from './dto/create-product-in-command.dto';
import { UpdateProductInCommandDto } from './dto/update-product-in-command.dto';

@Injectable()
export class ProductInCommandService {
  create(createProductInCommandDto: CreateProductInCommandDto) {
    return 'This action adds a new productInCommand';
  }

  findAll() {
    return `This action returns all productInCommand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productInCommand`;
  }

  update(id: number, updateProductInCommandDto: UpdateProductInCommandDto) {
    return `This action updates a #${id} productInCommand`;
  }

  remove(id: number) {
    return `This action removes a #${id} productInCommand`;
  }
}
