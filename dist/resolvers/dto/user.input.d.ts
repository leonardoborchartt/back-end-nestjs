export default class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly cityLive: string;
    readonly birthDay: Date;
}
export declare class DeleteUserDto {
    readonly id: number;
}
export declare class UpdateUserNameDto {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
}
