import RepoService from '../repo.service';
import User from '../db/models/user.entity';
import CreateUserDto, { DeleteUserDto, UpdateUserNameDto } from './dto/user.input';
export default class UserResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    deleteUser(input: DeleteUserDto): Promise<User>;
    createUser(input: CreateUserDto): Promise<User>;
    updateNameUser(input: UpdateUserNameDto): Promise<User>;
}
