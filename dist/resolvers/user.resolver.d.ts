import RepoService from '../repo.service';
import User from '../db/models/user.entity';
import CreateUserDto from './dto/user.input';
export default class UserResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    createOrLoginUser(input: CreateUserDto): Promise<User>;
}
