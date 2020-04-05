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
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
let CreateUserDto = class CreateUserDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "cityLive", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "birthDay", void 0);
CreateUserDto = __decorate([
    graphql_1.InputType()
], CreateUserDto);
exports.default = CreateUserDto;
let DeleteUserDto = class DeleteUserDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], DeleteUserDto.prototype, "id", void 0);
DeleteUserDto = __decorate([
    graphql_1.InputType()
], DeleteUserDto);
exports.DeleteUserDto = DeleteUserDto;
let UpdateUserNameDto = class UpdateUserNameDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], UpdateUserNameDto.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UpdateUserNameDto.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UpdateUserNameDto.prototype, "lastName", void 0);
UpdateUserNameDto = __decorate([
    graphql_1.InputType()
], UpdateUserNameDto);
exports.UpdateUserNameDto = UpdateUserNameDto;
//# sourceMappingURL=user.input.js.map