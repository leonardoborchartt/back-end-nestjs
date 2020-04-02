import { Repository } from 'typeorm';
import User from './db/models/user.entity';
declare class RepoService {
    readonly userRepo: Repository<User>;
    constructor(userRepo: Repository<User>);
}
export default RepoService;
