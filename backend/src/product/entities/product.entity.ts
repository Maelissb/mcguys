import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

export class ProductInCommandEntity implements Product {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    typeId: number;

    constructor(product: Product) {
        Object.assign(this, product);
    }
}
