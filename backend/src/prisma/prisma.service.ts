import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//prisma/client permet de ce connecter ce deconnecter
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
       await this.$connect;
    }
    async onModuleDestroy() {
       await this.$disconnect;
    }   
}