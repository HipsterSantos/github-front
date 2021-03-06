import { Companies } from './companies.model';
import { Users } from './users.model';

export interface Data{
    users: Users[];
    orgs:Companies[];
}