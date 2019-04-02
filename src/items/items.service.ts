import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '3434343434',
            name: 'Item One',
            qty: 100,
            description: 'This is Item One',
        },
        {
            id: '9867566456',
            name: 'Item Two',
            qty: 50,
            description: 'This is Item Two',
        },
    ];
}
