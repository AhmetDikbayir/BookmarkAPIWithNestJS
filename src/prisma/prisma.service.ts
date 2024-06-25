import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources: {
                db:{
                    url: 'postgresql://db_user:db_password@localhost:5432/nest?schema=public'
                },
            },
        });
    }
}
