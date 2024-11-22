import { Product } from '@prisma/client';

export class ProductEntity implements Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    typeId: number;

    constructor(product: Product) {
        Object.assign(this, product);
    }
}