import 'reflect-metadata';
import { Container } from 'inversify';
import { ListService } from '@/app/list/service';

const inversifyContainer = new Container();
inversifyContainer.bind<ListService>('ListService').to(ListService);

export { inversifyContainer };
