import { Item } from '@/store/vuex-modules/list/item-view-model';
import { injectable } from 'inversify';
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8010',
    timeout: 1000,
    headers: {'content-type': 'application/json'},
  });

@injectable()
export class ListService {
    public addItemRequest(
        item: Item,
        onSuccess: () => void,
        onError: (err: string) => void,
    ) {

        onSuccess();
    }

    public deleteItemRequest(
        id: string,
        onSuccess: () => void,
        onError: (err: string) => void,
    ) {
        onSuccess();
    }
}
