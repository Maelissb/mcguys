import {  BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductInCommandDto} from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ProductInCommandEntity} from './entities/product.entity';


@Injectable()
export class ProductInCommandService {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: number, updateProductInCommandDto: UpdateProductInCommandDto) {
        try {
            const productInCommand = await this.prisma.productInCommand.update({
                where: {
                    id
                },
                data: updateProductInCommandDto
            });
    
            return new ProductInCommandEntity(productInCommand);
        } catch (error) {
            if (error.code == 'P2025') throw new NotFoundException(`Product in command ${id} doesn't exist`);
            throw new BadRequestException('Request body not valid');
        }
    }
}