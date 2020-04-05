"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const repo_service_1 = require("../repo.service");
const user_entity_1 = require("../db/models/user.entity");
const user_input_1 = require("./dto/user.input");
const swagger_1 = require("@nestjs/swagger");
let UserResolver = class UserResolver {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async getUsers() {
        return this.repoService.userRepo.find();
    }
    async getUser(id) {
        const user = this.repoService.userRepo.findOne(id);
        return user;
    }
    async deleteUser(input) {
        try {
            const message = await this.repoService.userRepo.findOne(input.id);
            const copy = Object.assign({}, message);
            await this.repoService.userRepo.remove(message);
            return copy;
        }
        catch (error) {
            error.message = ("Id does not exist");
            return (error);
        }
    }
    async createUser(input) {
        const user = this.repoService.userRepo.create({
            firstName: input.firstName.toLowerCase(),
            lastName: input.lastName.toLowerCase(),
            cityLive: input.cityLive.toLowerCase(),
            birthDay: input.birthDay
        });
        await this.repoService.userRepo.save(user);
        return user;
    }
    async updateNameUser(input) {
        const oldUser = await this.repoService.userRepo.findOne(input.id);
        oldUser.firstName = input.firstName;
        oldUser.lastName = input.lastName;
        await this.repoService.userRepo.save(oldUser);
        return oldUser;
    }
};
__decorate([
    graphql_1.Query(() => [user_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    graphql_1.Query(() => user_entity_1.default, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.DeleteUserDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.default]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UpdateUserNameDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateNameUser", null);
UserResolver = __decorate([
    swagger_1.ApiTags('users'),
    graphql_1.Resolver(() => user_entity_1.default),
    __metadata("design:paramtypes", [repo_service_1.default])
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=user.resolver.js.map