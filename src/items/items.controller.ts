import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { create } from 'domain';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get All Items';
    }

    @Post()
    create(): string {
        return 'Create Item';
    }
}
