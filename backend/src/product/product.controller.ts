import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';

@Controller('product')
@ApiTags('product') // api tag permet de definir un nom au routes
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiBody({
    type: CreateProductDto
  })
  @ApiResponse({
    description: 'Create a product',
    type: ProductEntity
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiResponse({
    description: 'find all products',
    type: ProductEntity,
    isArray: true
  })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    description: 'find one product',
    type: ProductEntity
  })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateProductDto
  })
  @ApiResponse({
    description: 'Update product',
    type: ProductEntity
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({
    description: 'delete product',
    type: ProductEntity
  })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
