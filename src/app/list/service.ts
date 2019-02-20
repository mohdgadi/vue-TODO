import { Item } from '@/store/vuex-modules/list/module';
import { inject, injectable } from 'inversify';

@injectable()
export class ListService {
    public addItemRequest(
        item: Item,
        onSuccess: () => void,
        onError: (err: string) => void,
    ) {
        console.log(item.name +  "in service bc");
    }
}
