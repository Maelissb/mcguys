import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductInCommandService } from './product-in-command.service';
import { CreateProductInCommandDto } from './dto/create-product-in-command.dto';
import { UpdateProductInCommandDto } from './dto/update-product-in-command.dto';

@Controller('product-in-command')
export class ProductInCommandController {
  constructor(private readonly productInCommandService: ProductInCommandService) {}

  @Post()
  create(@Body() createProductInCommandDto: CreateProductInCommandDto) {
    return this.productInCommandService.create(createProductInCommandDto);
  }

  @Get()
  findAll() {
    return this.productInCommandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productInCommandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductInCommandDto: UpdateProductInCommandDto) {
    return this.productInCommandService.update(+id, updateProductInCommandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productInCommandService.remove(+id);
  }
}
